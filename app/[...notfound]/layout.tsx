import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Not Found',
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
