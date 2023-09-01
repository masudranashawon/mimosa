import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';
import PackageDetailsSection from '@/components/packages-details/PackageDetailsSection';
import Navbar from '@/components/shared/navbar/Navbar';
import FooterMini from '@/components/shared/footer/FooterMini';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const packageItem = data.find((item: packageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <PackageDetailsSection packageItem={packageItem} />
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetailsPage;
