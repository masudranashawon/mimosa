import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';
import PackageDetailsSection from '@/components/packages-details/PackageDetailsSection';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const packageItem = data.find((item: packageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }

  return (
    <main>
      <PackageDetailsSection packageItem={packageItem} />
    </main>
  );
};

export default PackageDetailsPage;
