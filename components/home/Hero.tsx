import Image from "next/image";

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-4rem)]'>
      <div className='w-full h-full grid grid-rows-4 gap-5 items-center'>
        {/* FIRST ROW */}
        <div className='w-full h-full grid grid-cols-[30%_auto] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Cream Sheer looking Down'
              width={640}
              height={360}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-6xl 2xl:text-8xl uppercase font-semibold'>
              Lorem ipsum dolor
            </h2>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className='w-full h-full grid grid-cols-[25%_auto_50%] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-6xl 2xl:text-8xl uppercase font-semibold'>
              Lorems
            </h2>
          </div>
          <div className='w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Cream Sheer looking Down'
              width={320}
              height={180}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-6xl 2xl:text-8xl uppercase font-semibold'>
              Lorems ipsum
            </h2>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className='w-full h-full grid grid-cols-[40%_auto] gap-10 2xl:gap-20 border-b pb-5 border-b-gray'>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-6xl 2xl:text-8xl uppercase font-semibold'>
              Lorem ipsum
            </h2>
          </div>
          <div className='w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Cream Sheer looking Down'
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
              src='https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Cream Sheer looking Down'
              width={640}
              height={360}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full h-full flex items-center'>
            <h2 className='text-6xl 2xl:text-8xl uppercase font-semibold'>
              Lorem ipsum dolo
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
