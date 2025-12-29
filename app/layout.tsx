import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Notion Gate',
  description: 'Password protected Notion page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
