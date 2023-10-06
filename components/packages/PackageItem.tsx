import { beautyPackageType } from '@/types/beautyPackage';
import { buttonVariance } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import Link from 'next/link';

interface PackageItemProps {
  packageItem: beautyPackageType;
}

const PackageItem: React.FC<PackageItemProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      {/* PACKAGE CARD IMAGE */}
      <Link
        href={`/packages/${packageItem._id}`}
        className='border-grey group h-[12rem] w-full overflow-hidden rounded-xl border 2xl:h-[15rem]'
      >
        <Image
          src={packageItem.images[0]}
          alt={packageItem.title}
          height={360}
          width={640}
          priority
          className='eq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>

      {/* PACKAGE CARD CONTENT */}
      <div className='eq flex w-full flex-col gap-2.5 rounded-xl border-gray bg-gray/25 p-5 hover:bg-gray/50'>
        <span className='text-xs font-bold uppercase tracking-[0.375em] text-green'>
          {packageItem.category}
        </span>
        <h4 className='text-xl 2xl:text-2xl'>{packageItem.title}</h4>
        <hr />
        <p className='text-dark/75'>{packageItem.description}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-xl 2xl:text-2xl'>
            {formatCurrency(packageItem.price)}
          </p>
          <Link
            href={`/packages/${packageItem._id}`}
            className={buttonVariance({ variant: 'royalty' })}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
