import { loginAction } from '@/app/actions/auth';
import { LoginSchema } from '@/types/schema/schema.auth';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as validationModule from '@/utils/validationUtils';
import prisma from '@/lib/prisma';
import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';
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
  });

  it('should return a validation error if input is invalid', async () => {
    const validationErrors = [
      { path: ['email'], message: 'Invalid email format' },
    ];

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
});
