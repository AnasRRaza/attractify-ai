import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import QueryProvider from '@/components/QueryProvider';

import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = { title: 'Energy Usage', description: '' };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${jakartaSans.variable} antialiased`}>
        <Toaster />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
