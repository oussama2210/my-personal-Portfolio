// Authentication utility functions
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const key = new TextEncoder().encode(SECRET_KEY);

// Token expiration time (7 days)
const TOKEN_EXPIRATION = '7d';

export interface SessionPayload {
  userId: string;
  email: string;
  role: string;
  expiresAt: Date;
}

/**
 * Encrypt session data and create JWT token
 */
export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(key);
}

/**
 * Decrypt JWT token and verify
 */
export async function decrypt(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ['HS256'],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    console.error('Failed to verify session:', error);
    return null;
  }
}

/**
 * Create a new session
 */
export async function createSession(userId: string, email: string, role: string = 'admin') {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const session = await encrypt({ userId, email, role, expiresAt });

  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  return session;
}

/**
 * Verify current session
 */
export async function verifySession(): Promise<SessionPayload | null> {
  const cookie = (await cookies()).get('session')?.value;

  if (!cookie) {
    return null;
  }

  const session = await decrypt(cookie);

  if (!session) {
    return null;
  }

  // Check if session is expired
  if (new Date(session.expiresAt) < new Date()) {
    return null;
  }

  return session;
}

/**
 * Delete session (logout)
 */
export async function deleteSession() {
  (await cookies()).delete('session');
}

/**
 * Update session expiration
 */
export async function updateSession() {
  const session = (await cookies()).get('session')?.value;

  if (!session) {
    return null;
  }

  const parsed = await decrypt(session);

  if (!parsed) {
    return null;
  }

  // Extend session
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const newSession = await encrypt({ ...parsed, expiresAt });

  (await cookies()).set('session', newSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  return newSession;
}
