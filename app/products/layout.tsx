import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Products',
};

export default function ProductsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
