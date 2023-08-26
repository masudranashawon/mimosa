import { packageItem } from '@/types/packageItem';

interface PackageDetailsSectionProps {
  packageItem: packageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>
      <h2 className='text-4xl'>{packageItem?.title}</h2>
    </section>
  );
};

export default PackageDetailsSection;
