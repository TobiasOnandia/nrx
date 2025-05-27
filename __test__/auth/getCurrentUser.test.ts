import { getCurrentUser } from '@/helper/getCurrentUser';
import { isTokenBlocked } from '@/utils/blocklist';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const TEST_JWT_SECRET = 'a_very_secret_key_for_testing_purposes_12345'; // Al menos 32 caracteres

vi.stubEnv('AUTH_TOKEN_COOKIE_NAME', 'test_token');
vi.stubEnv('JWT_SECRET', TEST_JWT_SECRET);

vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

vi.mock('jose', async (importOriginal) => {
  const actualJose = await importOriginal<typeof import('jose')>();
  return {
    ...actualJose,
    jwtVerify: vi.fn(),
  };
});

vi.mock('@/utils/blocklist', () => ({
  isTokenBlocked: vi.fn(),
}));

describe('getCurrentUser', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should return null if no token is provided', async () => {
    const getMock = vi.fn().mockReturnValue(undefined);
    vi.mocked(cookies).mockImplementation(
      () =>
        Promise.resolve({
          get: getMock,
        }) as any,
    );

    const result = await getCurrentUser();

    expect(result).toEqual({
      success: false,
      message: 'Authentication token missing',
    });
  });

  it('should return null if token is blocked', async () => {
    const getMock = vi.fn().mockReturnValue({
      value: 'test_token',
    });
    vi.mocked(cookies).mockImplementation(
      () =>
        Promise.resolve({
          get: getMock,
        }) as any,
    );

    vi.mocked(isTokenBlocked).mockResolvedValue(true);

    const result = await getCurrentUser();

    expect(result).toEqual({
      success: false,
      message: 'An error occurred while getting the current user',
    });
  });

  it('should return { id: payload.userId , email: payload.email }', async () => {
    const getMock = vi.fn().mockReturnValue({
      value: 'test_token',
    });
    vi.mocked(cookies).mockImplementation(
      () =>
        Promise.resolve({
          get: getMock,
        }) as any,
    );

    vi.mocked(isTokenBlocked).mockResolvedValue(false);

    vi.mocked(jwtVerify).mockResolvedValueOnce({
      payload: { jti: 'test_jti', userId: 'test_id', email: 'test_email' },
      protectedHeader: {},
    } as any);

    const result = await getCurrentUser();

    expect(result).toEqual({
      success: true,
      id: 'test_id',
      email: 'test_email',
    });
  });
});
