import { data } from '@/data/packages';
import { cn } from '@/lib/utils';
import { buttonVariance } from '../ui/Button';
import { packageItem } from '@/types/packageItem';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from './PackageItem';
import Link from 'next/link';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />

      {/* PACKAGES */}
      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Wellness')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Beauty')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Events')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
      <div className='flex justify-center'>
        <Link
          href='/packages'
          className={cn(
            buttonVariance({ variant: 'outline' }),
            'mt-10 2xl:mt-20'
          )}
        >
          View All packages
        </Link>
      </div>
    </section>
  );
};

export default Packages;
