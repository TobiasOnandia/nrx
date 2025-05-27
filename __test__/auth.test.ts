import { verifyAuthToken } from '../utils/verifyAuthToken';
import { SignJWT } from 'jose';
import { describe, it, expect, vi } from 'vitest';

const TEST_JWT_SECRET =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOYiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDgzNDg4NTUsImV4cCI6MTc3OTg4NDg1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.i0WXTtigSUKWJlg4I3V5XowsKHNnoyhm4--hugD1Lb';

vi.stubEnv('JWT_SECRET', TEST_JWT_SECRET);

const generateTestToken = async (
  payload: { userId: string } | Record<string, any>,
  expiresIn: string | number = '1h',
) => {
  if (!TEST_JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined for testing');
  }

  const secretKey = new TextEncoder().encode(TEST_JWT_SECRET);

  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secretKey);
};

describe('verifyAuthToken', () => {
  it('should return success true with payload for a valid token', async () => {
    const expectedUserId = 'test-user-id-123';
    const token = await generateTestToken({ userId: expectedUserId });

    const result = await verifyAuthToken(token);

    expect(result.success).toBe(true);
    expect(result.payload).toBeDefined();
    expect(result.payload?.userId).toBe(expectedUserId);
    expect(result.message).toBeUndefined();
  });

  it('should return sucess false and Authentication token missing', async () => {
    const result = await verifyAuthToken(undefined);

    expect(result.success).toBe(false);
    expect(result.payload).toBeUndefined();
    expect(result.message).toBe('Authentication token missing');
  });

  it('should return success false and message', async () => {
    const expectedUserId = null;
    const token = await generateTestToken({ userId: expectedUserId });

    const result = await verifyAuthToken(token);

    expect(result.success).toBe(false);
    expect(result.payload).toBeUndefined();
    expect(result.message).toBe(
      'Invalid token payload: userId missing or invalid',
    );
  });

  it('should return false and correct message for token with invalid userId', async () => {
    const token = await generateTestToken({ someOtherField: 'someValue' });

    const result = await verifyAuthToken(token);

    expect(result.success).toBe(false);
    expect(result.payload).toBeUndefined();
    expect(result.message).toBe(
      'Invalid token payload: userId missing or invalid',
    );
  });

  it('should return success false and "Token expired" for an expired token', async () => {
    const expectedUserId = 'expired-user';
    const expiredToken = await generateTestToken(
      { userId: expectedUserId },
      '-1s',
    );

    const result = await verifyAuthToken(expiredToken);

    expect(result.success).toBe(false);
    expect(result.message).toBe('Token expired');
    expect(result.payload).toBeUndefined();
  });
  it('should return success false and "Invalid token signature" for an invalid signature', async () => {
    const expectedUserId = 'user-with-bad-sig';
    const ANOTHER_TEST_SECRET = 'a_completely_different_secret';
    const badSignatureToken = await new SignJWT({ userId: expectedUserId })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(new TextEncoder().encode(ANOTHER_TEST_SECRET));

    const result = await verifyAuthToken(badSignatureToken);

    expect(result.success).toBe(false);
    expect(result.message).toBe('Invalid token signature');
    expect(result.payload).toBeUndefined();
  });
  it('should return success false and "JWT_SECRET is not defined" if environment variable is missing', async () => {
    vi.stubEnv('JWT_SECRET', '');

    const dummyToken = await generateTestToken({ userId: 'dummy' });

    const result = await verifyAuthToken(dummyToken);

    expect(result.success).toBe(false);
    expect(result.message).toBe('JWT_SECRET is not defined');
    expect(result.payload).toBeUndefined();
  });
});
