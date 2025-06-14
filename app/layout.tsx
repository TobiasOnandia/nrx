import type { Metadata } from 'next';
import './globals.css';
import LocalFont from 'next/font/local';
import { Header } from '@/components/layout/Header';
import { getCurrentUser } from '@/helper/getCurrentUser';
import { AuthProvider } from '@/context/AuthProvider';
import { Toaster } from 'sonner';

const satoshi = LocalFont({
  src: '../public/font/Satoshi.ttf',
});

export const metadata: Metadata = {
  title: 'Nrx',
  description: 'Generated by Tobias Onandia',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased min-h-screen bg-gray-900`}
      >
        <Toaster position="top-right" richColors closeButton />
        <AuthProvider user={currentUser.success ? currentUser : null}>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
