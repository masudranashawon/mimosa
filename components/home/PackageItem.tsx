import { buttonVariance } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import Link from 'next/link';

interface PackageItemProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const PackageItem: React.FC<PackageItemProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      {/* PACKAGE CARD IMAGE */}
      <Link
        href={`/packages/${id}`}
        className='border-grey group h-[12rem] w-full overflow-hidden rounded-xl border 2xl:h-[15rem]'
      >
        <Image
          src={image}
          alt={title}
          height={360}
          width={640}
          priority
          className='eq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>

      {/* PACKAGE CARD CONTENT */}
      <div className='eq flex w-full flex-col gap-2.5 rounded-xl border-gray bg-gray/25 p-5 hover:bg-gray/50'>
        <span className='text-xs font-bold uppercase tracking-[0.375em] text-green'>
          {category}
        </span>
        <h4 className='text-xl 2xl:text-2xl'>{title}</h4>
        <hr />
        <p className='text-dark/75'>{description}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-xl 2xl:text-2xl'>{formatCurrency(price)}</p>
          <Link
            href={`/packages/${id}`}
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
