import type { Metadata } from 'next';

// import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Energy Usage',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return <Sidebar>{children}</Sidebar>;
  return <>{children}</>;
}
