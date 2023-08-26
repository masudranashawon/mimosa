'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import NavbarMini from '@/components/shared/NavbarMini';
import Footer from '@/components/shared/Footer';
import FooterMini from '@/components/shared/FooterMini';

const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  if (
    (children as React.ReactElement<any>)?.props?.childProp?.segment?.at(0) ===
    'notfound'
  ) {
    return <>{children}</>;
  }

  switch (pathName) {
    case '/':
      return (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      );
    case '/user/sign-in':
    case '/user/sign-up':
      return (
        <>
          <NavbarMini />
          {children}
          <FooterMini />
        </>
      );
    default:
      return (
        <>
          <Navbar />
          {children}
          <FooterMini />
        </>
      );
  }
};

export default MasterProvider;
