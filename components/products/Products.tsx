import { data } from '@/data/products';
import { productItem } from '@/types/productItem';
import { cn } from '@/lib/utils';
import { buttonVariance } from '../ui/Button';
import SectionTitle from '../shared/SectionTitle';
import ProductItem from './ProductItem';
import Link from 'next/link';

interface ProductsProps {
  fromProductsPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductsPage }) => {
  return (
    <section
      className='wrapper section-padding'
      id={fromProductsPage ? 'products-page' : 'products'}
    >
      <SectionTitle
        subTitle='Products'
        title='Browse our beauty products'
        color='bg-blue'
      />

      {/* PRODUCTS */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {!fromProductsPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item: productItem) => (
              <ProductItem key={item.id} productItem={item} />
            ))}

        {fromProductsPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductItem key={item.id} productItem={item} />
            ))}
      </div>

      {!fromProductsPage && (
        <div className='mt-10 flex justify-center 2xl:mt-20'>
          <Link
            href='/products'
            className={cn(buttonVariance({ variant: 'outline' }))}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
