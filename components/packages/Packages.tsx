'use client';

import { cn } from '@/lib/utils';
import { buttonVariance } from '../ui/Button';
import { beautyPackageType } from '@/types/beautyPackage';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from './PackageItem';
import Link from 'next/link';
import useFetch from '@/hooks/use-fetch';
import Loading from '../shared/loading';
import Error from '../shared/error';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');

  return (
    <section
      className='wrapper section-padding'
      id={!fromPackagePage ? 'packages' : 'packages-page'}
    >
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {/* PACKAGES */}
      {beautyPackages && beautyPackages.length > 0 && (
        <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
          {/* Wellness */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter(
                  (item: beautyPackageType) => item.category === 'Wellness'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 4)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                .filter(
                  (item: beautyPackageType) => item.category === 'Wellness'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>

          {/* Beauty */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Beauty')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 4)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Beauty')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>

          {/* Events */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Events')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 4)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Events')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>
        </HorizontalTab>
      )}

      {!fromPackagePage && beautyPackages && beautyPackages.length > 0 && (
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
