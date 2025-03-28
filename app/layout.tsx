import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

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
    <html lang='en' suppressHydrationWarning>
      <body className={`${jakartaSans.variable} antialiased dark:bg-[#0A0C0F]`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Toaster />
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
