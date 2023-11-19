import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sky Folder',
  description: 'All my flights',
  publisher: 'Liviu-Gabriel Toma',
  applicationName: 'Sky Folder',
  keywords: ['Plane tickets collection'],
  creator: 'Liviu Toma',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
