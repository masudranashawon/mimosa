import { data } from '@/data/gallery';
import { cn } from '@/lib/utils';
import { galleryItemType } from '@/types/galleryItem';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className='min-h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full w-full'>
        <SectionTitle
          title='Discover Glamour in Our Elixir Showcase'
          subTitle='Gallery'
          color='bg-green'
        />

        <div className='gallery-grid-parent h-screen w-full gap-10'>
          {data.map((item: galleryItemType) => (
            <div
              key={item.id}
              className={cn(
                item.class,
                'eq group h-full w-full overflow-hidden border-[12px] border-green/10 shadow-2xl hover:border-green/20'
              )}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                priority
                className='eq h-full w-full object-cover brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
