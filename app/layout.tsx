import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Luangxay | Software & Data Engineer',
  description: 'Software Engineering student at Concordia University & Data Engineer Intern at CDPQ.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}