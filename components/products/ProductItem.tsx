import { productItem } from '@/types/productItem';
import { buttonVariance } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItemProps {
  productItem: productItem;
}

const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <div className='flex h-full w-full flex-col gap-5 overflow-hidden rounded-xl border border-gray p-5'>
      <div className='group h-[15rem] w-full overflow-hidden rounded-lg'>
        {/* PRODUCT IMAGE */}
        <Image
          src={productItem.images[0]}
          alt={productItem.title}
          width={640}
          height={360}
          priority
          className='eq h-full w-full object-cover group-hover:scale-125'
        />
      </div>

      {/* PRODUCT SHORT DETAIL */}
      <div className='flex flex-col gap-2.5'>
        <span className='text-xs font-bold uppercase tracking-widest text-orange'>
          {productItem.category}
        </span>
        <h3 className='truncate text-2xl'>{productItem.title}</h3>
        <hr className='opacity-25' />
        <p className='opacity-60'>
          {productItem.description.substring(0, 60)}...
        </p>
        <div className='flex items-center justify-between gap-5'>
          <p className='text-2xl'>{formatCurrency(productItem.price)}</p>
          <Link
            href={`/products/${productItem.id}`}
            className={buttonVariance({ variant: 'ocean' })}
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
