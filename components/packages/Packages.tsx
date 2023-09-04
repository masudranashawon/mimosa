import { data } from '@/data/packages';
import { cn } from '@/lib/utils';
import { buttonVariance } from '../ui/Button';
import { packageItem } from '@/types/packageItem';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from './PackageItem';
import Link from 'next/link';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  return (
    <section
      className='wrapper section-padding'
      id={!fromPackagePage ? 'packages' : 'packages-page'}
    >
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />

      {/* PACKAGES */}
      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Wellness')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Wellness')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
      </HorizontalTab>

      {!fromPackagePage && (
        <div className='mt-10 flex justify-center 2xl:mt-20'>
          <Link
            href='/packages'
            className={cn(buttonVariance({ variant: 'outline' }))}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
