import { beautyPackageType } from '@/types/beautyPackage';

interface PackageDetailsSectionProps {
  packageItem: beautyPackageType;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>
      <h2 className='text-4xl'>{packageItem.title}</h2>
    </section>
  );
};

export default PackageDetailsSection;
