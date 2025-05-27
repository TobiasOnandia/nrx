import { loginAction } from '@/app/actions/auth';
import { LoginSchema } from '@/types/schema/schema.auth';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as validationModule from '@/utils/validationUtils';
import prisma from '@/lib/prisma';
import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

const TEST_USER_ID = 'test-user-id';
const TEST_USER_EMAIL = 'test-user@example.com';
const TEST_USER_NAME = 'Test User';
const TEST_JTI = 'mock_jti_123';

vi.stubEnv('AUTH_TOKEN_COOKIE_NAME', 'test_auth_token');
vi.stubEnv('JWT_SECRET', 'test_super_secret_jwt_key_32_chars');
vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

vi.mock('jose', async (importOriginal) => {
  const actualJose = await importOriginal<typeof import('jose')>();
  return {
    ...actualJose,
    SignJWT: vi.fn(() => ({
      setProtectedHeader: vi.fn().mockReturnThis(),
      setIssuedAt: vi.fn().mockReturnThis(),
      setJti: vi.fn().mockReturnThis(),
      setExpirationTime: vi.fn().mockReturnThis(),
      sign: vi.fn(),
    })),
  };
});

vi.mock('bcrypt', () => {
  const compareMock = vi.fn();
  const hashMock = vi.fn();

  return {
    default: {
      compare: compareMock,
      hash: hashMock,
    },
  };
});
vi.mock('nanoid', () => ({
  nanoid: vi.fn(),
}));

vi.mock('@/lib/prisma', () => ({
  default: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

describe('loginAction', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.spyOn(validationModule, 'validateAndExtract' as any);
    const setCookieMock = vi.fn();

    vi.mocked(cookies).mockReturnValue(
      Promise.resolve({
        set: setCookieMock,
      }) as any,
    );
  });

  it('should return a validation error if input is invalid', async () => {
    vi.mocked(validationModule.validateAndExtract).mockReturnValueOnce({
      success: false,
      message: 'Validation failed',
      errors: {
        email: ['Invalid email format'],
      },
    });

    const request = { email: 'invalid-email', password: 'short' };

    const result = await loginAction(request);

    expect(result).toEqual({
      success: false,
      message: 'Validation failed',
      errors: {
        email: ['Invalid email format'],
      },
    });

    expect(validationModule.validateAndExtract).toHaveBeenCalledTimes(1);
    expect(validationModule.validateAndExtract).toHaveBeenCalledWith(
      LoginSchema,
      request,
    );
    expect(prisma.user.findUnique).not.toHaveBeenCalled();
    expect(SignJWT).not.toHaveBeenCalled();
    expect(nanoid).not.toHaveBeenCalled();
    expect(cookies).not.toHaveBeenCalled();
  });

  it('should return a user not found error if user is not found', async () => {
    const request = { email: 'test-user@example.com', password: 'password' };

    vi.mocked(validationModule.validateAndExtract).mockReturnValueOnce({
      success: true,
      data: request,
    });

    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);

    const result = await loginAction(request);

    expect(result).toEqual({
      success: false,
      message: 'User not found',
    });

    expect(validationModule.validateAndExtract).toHaveBeenCalledTimes(1);
    expect(validationModule.validateAndExtract).toHaveBeenCalledWith(
      LoginSchema,
      request,
    );
    expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: request.email },
    });
    expect(SignJWT).not.toHaveBeenCalled();
    expect(nanoid).not.toHaveBeenCalled();
    expect(cookies).not.toHaveBeenCalled();
  });

  it('should return a user if found and password is correct', async () => {
    const request = { email: TEST_USER_EMAIL, password: 'password' };

    vi.mocked(validationModule.validateAndExtract).mockReturnValueOnce({
      success: true,
      data: request,
    });

    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: TEST_USER_ID,
      email: TEST_USER_EMAIL,
      password: 'hashed_password_from_db',
      name: TEST_USER_NAME,
      createAt: new Date(),
      updateAt: new Date(),
    });

    vi.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true as any);

    vi.mocked(nanoid).mockReturnValueOnce(TEST_JTI);
    const result = await loginAction(request);

    expect(result).toEqual({
      success: true,
      message: 'login successfully',
      user: {
        id: TEST_USER_ID,
        email: TEST_USER_EMAIL,
        name: TEST_USER_NAME,
      },
    });

    expect(validationModule.validateAndExtract).toHaveBeenCalledTimes(1);
    expect(validationModule.validateAndExtract).toHaveBeenCalledWith(
      LoginSchema,
      request,
    );
    expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: request.email },
    });
    expect(bcrypt.compare).toHaveBeenCalledTimes(1);
    expect(bcrypt.compare).toHaveBeenCalledWith(
      request.password,
      'hashed_password_from_db',
    );
    expect(SignJWT).toHaveBeenCalledTimes(1);
    expect(SignJWT).toHaveBeenCalledWith({
      userId: TEST_USER_ID,
      email: TEST_USER_EMAIL,
    });
    expect(nanoid).toHaveBeenCalledTimes(1);
    expect(nanoid).toHaveBeenCalledWith();

    expect(cookies).toHaveBeenCalledTimes(1);
  });
});
