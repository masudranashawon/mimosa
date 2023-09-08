import { data } from '@/data/products';
import { productItem } from '@/types/productItem';
import ProductDetailsSection from '@/components/Product-Details/ProductDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const product = data.find((item: productItem) => item.id === id);

  if (!product) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <ProductDetailsSection product={product} />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductDetailsPage;
