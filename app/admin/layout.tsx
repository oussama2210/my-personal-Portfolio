import { ReactNode } from 'react';

export const metadata = {
  title: 'Admin Dashboard - Portfolio',
  description: 'Admin dashboard for managing portfolio content',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
