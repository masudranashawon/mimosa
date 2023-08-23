import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-4rem)]'>
      <div className='w-full h-full grid grid-rows-4 gap-5 items-center relative'>
        {/* FIRST ROW */}
        <div className='w-full h-full grid grid-cols-[30%_auto] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman With White Facial Mask'
              width={640}
              height={360}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-7xl 2xl:text-9xl uppercase font-bold'>
              Emerge your
            </h2>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className='w-full h-full grid grid-cols-[25%_auto_50%] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full flex items-center'>
            <h2
              className={cn(
                playfairDisplay.className,
                "text-7xl 2xl:text-9xl lowercase"
              )}
            >
              Inner
            </h2>
          </div>
          <div className='w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://images.pexels.com/photos/6663574/pexels-photo-6663574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='A Woman Having a Facial Treatment'
              width={320}
              height={180}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-7xl 2xl:text-9xl uppercase font-bold'>
              glamour<span className='text-green'>.</span>
            </h2>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className='w-full h-full grid grid-cols-[40%_auto] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-7xl 2xl:text-9xl uppercase font-bold'>
              unveiling
            </h2>
          </div>
          <div className='w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/6758085/pexels-photo-6758085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Peaceful young elegant woman lying on floor near fruits scattered on white cloth'
              width={1280}
              height={720}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className='w-full h-full grid grid-cols-[35%_auto] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]'>
            <Image
              src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Wrapped in White Towel Lying on Bed with Eyes Closed'
              width={1280}
              height={720}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-7xl 2xl:text-9xl uppercase font-bold'>
              <span
                className={cn(
                  playfairDisplay.className,
                  "lowercase font-normal"
                )}
              >
                with
              </span>{" "}
              M
              <span
                className={cn(
                  playfairDisplay.className,
                  "lowercase font-normal text-pink"
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
          className='text-xs 2xl:text-lg bg-dark text-light w-20 h-20 2xl:w-40 2xl:h-40 rounded-full overflow-hidden flex justify-center items-center uppercase absolute left-[35%] bottom-[12%] 2xl:left-[33%] 2xl:-bottom-[5%] z-[1] group shadow-2xl shadow-dark/50 hover:shadow-violet/50 eq'
        >
          <p className='z-[3]'>Packages</p>

          {/* FILLER 1 */}
          <span className='z-[2] absolute top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet group-hover:top-1/2 eq'></span>

          {/* FILLER 2 */}
          <span className='z-[2] absolute -top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet group-hover:top-0 eq'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
