'use client';

import PackageDetailsSection from '@/components/packages-details/PackageDetailsSection';
import Navbar from '@/components/shared/navbar/Navbar';
import FooterMini from '@/components/shared/footer/FooterMini';
import useFetch from '@/hooks/use-fetch';
import Loading from '@/components/shared/loading';
import Error from '@/components/shared/error';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: packageItem,
    error,
    isLoading,
  } = useFetch(`/api/beauty_packages/${params.id}`);

  return (
    <>
      <Navbar />
      <main>
        {isLoading && (
          <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
            <Loading isLoading={isLoading} />
          </div>
        )}

        {error && (
          <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
            <Error error={error.message} />
          </div>
        )}

        {packageItem && <PackageDetailsSection packageItem={packageItem} />}
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetailsPage;
