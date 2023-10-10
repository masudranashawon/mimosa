import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-4rem)]'>
      <div className='relative grid h-full w-full grid-rows-4 items-center gap-5'>
        {/* FIRST ROW */}
        <div className='grid h-full w-full grid-cols-[30%_auto] gap-10 border-b border-b-gray pb-5 2xl:gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman With White Facial Mask'
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center justify-center'>
            <h2 className='heading-2 2xl:heading-1 text-center font-bold uppercase'>
              Emerge your
            </h2>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className='grid h-full w-full grid-cols-[25%_auto_50%] gap-10 border-b border-b-gray pb-5 2xl:gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2
              className={cn(
                playfairDisplay.className,
                'heading-2 2xl:heading-1 lowercase'
              )}
            >
              Inner
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='A Woman Having a Facial Treatment'
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='heading-2 2xl:heading-1 font-bold uppercase'>
              glamour<span className='text-green'>.</span>
            </h2>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className='grid h-full w-full grid-cols-[40%_auto] gap-10 border-b border-b-gray pb-5 2xl:gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2 className='heading-2 2xl:heading-1 font-bold uppercase'>
              unveiling
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/6758085/pexels-photo-6758085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Peaceful young elegant woman lying on floor near fruits scattered on white cloth'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className='grid h-full w-full grid-cols-[35%_auto] gap-10 border-b border-b-gray pb-5 2xl:gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[50px_50px_50px_0px]'>
            <Image
              src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Wrapped in White Towel Lying on Bed with Eyes Closed'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center justify-center'>
            <h2 className='heading-2 2xl:heading-1 font-bold uppercase'>
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                with
              </span>{' '}
              M
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase text-pink'
                )}
              >
                i
              </span>
              mosa<span className='text-orange'>.</span>
            </h2>
          </div>
        </div>

        {/* PACKAGES BUTTON */}
        <Link
          href='/#packages'
          className='eq group absolute bottom-[10%] left-[38%] z-[1] flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-dark text-xs uppercase text-light shadow-2xl shadow-dark/50 hover:shadow-violet/50 2xl:-bottom-[5%] 2xl:left-[33%] 2xl:h-40 2xl:w-40 2xl:text-lg'
        >
          <p className='z-[3]'>Packages</p>

          {/* FILLER 1 */}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-violet group-hover:top-1/2'></span>

          {/* FILLER 2 */}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-violet group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
