import Community from '@/components/home/Community';
import CommunityGathered from '@/components/home/CommunityGathered';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Packages from '@/components/packages/Packages';
import Products from '@/components/products/Products';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Products />
        <CommunityGathered />
        <Community />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
