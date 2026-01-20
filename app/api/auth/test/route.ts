import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, hashPassword } from '@/lib/users';
import bcrypt from 'bcryptjs';

export async function GET(request: NextRequest) {
  try {
    // Test password hashing
    const testPassword = 'admin123';
    const hash = await hashPassword(testPassword);
    
    // Get admin user
    const user = await getUserByEmail('admin@portfolio.com');
    
    // Test comparison
    const isValid = user ? await bcrypt.compare(testPassword, user.password) : false;
    
    return NextResponse.json({
      success: true,
      test: {
        password: testPassword,
        generatedHash: hash,
        userExists: !!user,
        userEmail: user?.email,
        userHasPassword: !!user?.password,
        passwordMatches: isValid,
      },
      message: isValid ? 'Credentials are working!' : 'Credentials not working - check password hash',
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
