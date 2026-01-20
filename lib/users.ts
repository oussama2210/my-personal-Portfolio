// Simple in-memory user store (replace with database in production)
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  password: string; // hashed
  name: string;
  role: string;
}

// Hash for 'admin123'
const ADMIN_PASSWORD_HASH = '$2a$10$XQKvj5Qr5Qr5Qr5Qr5Qr5O8K8K8K8K8K8K8K8K8K8K8K8K8K8K8K';

// In production, replace this with a database
const users: User[] = [
  {
    id: '1',
    email: 'admin@portfolio.com',
    // This will be set properly on first login attempt
    password: '', 
    name: 'Admin User',
    role: 'admin',
  },
];

// Initialize admin password on first load
async function initializeUsers() {
  if (users[0].password === '') {
    users[0].password = await bcrypt.hash('admin123', 10);
    console.log('Admin user initialized with password: admin123');
  }
}

// Call initialization
initializeUsers();

/**
 * Find user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  // Ensure users are initialized
  await initializeUsers();
  const user = users.find((u) => u.email === email);
  return user || null;
}

/**
 * Verify user credentials
 */
export async function verifyCredentials(
  email: string,
  password: string
): Promise<User | null> {
  // Ensure users are initialized
  await initializeUsers();
  
  const user = await getUserByEmail(email);

  if (!user) {
    console.log('User not found:', email);
    return null;
  }

  // Check if password is empty (shouldn't happen, but safety check)
  if (!user.password) {
    console.log('User password not set');
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);
  
  console.log('Password verification:', { email, isValid });

  if (!isValid) {
    return null;
  }

  return user;
}

/**
 * Create new user (admin only)
 */
export async function createUser(
  email: string,
  password: string,
  name: string,
  role: string = 'admin'
): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    name,
    role,
  };

  users.push(newUser);
  return newUser;
}

/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<User | null> {
  const user = users.find((u) => u.id === id);
  return user || null;
}

/**
 * Helper function to hash password (for creating new users)
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

/**
 * Helper to test password hashing (for debugging)
 */
export async function testPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
