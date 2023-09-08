import { productItem } from '@/types/productItem';

interface ProductDetailsSectionProps {
  product: productItem;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return (
    <section className='wrapper section-padding'>
      <span>Product ID: {product.id}</span>
      <h3>Product name{product.title}</h3>
    </section>
  );
};

export default ProductDetailsSection;
