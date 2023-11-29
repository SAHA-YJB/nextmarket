import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import getCurrentUser from './actions/getCurrentUser';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-market',
  description: 'practice create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //현재 유저를 가져온다
  const currentUser = await getCurrentUser();

  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        {/* 페이지들 들어오는 곳 */}
        {children}
      </body>
    </html>
  );
}
