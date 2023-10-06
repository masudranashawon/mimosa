import { buttonVariance } from '../../ui/Button';
import Link from 'next/link';

const Navbar = async () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-16 items-center border-b border-gray bg-white/80 backdrop-blur-lg'>
      <div className='wrapper grid grid-cols-3 items-center'>
        {/* LEFT NAV */}
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/#packages' className='link-item'>
                Packages
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                link 2
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 3
              </Link>
            </li>
          </ul>
        </nav>

        {/* MID NAV */}
        <nav>
          <ul className='flex justify-center'>
            <li className='logo'>
              <Link href='/' className='text-3xl font-bold lowercase text-pink'>
                Mimosa.
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT NAV */}
        <nav>
          <ul className='flex items-center justify-end gap-5'>
            <li>
              <Link href='/' className='link-item'>
                Link 4
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href='/sign-in'
                className={buttonVariance({ variant: 'ocean' })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
