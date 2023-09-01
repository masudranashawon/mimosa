import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Sign in',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
