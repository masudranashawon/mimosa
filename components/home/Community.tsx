import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <div className='wrapper section-padding h-screen'>
      <div className='relative flex h-full w-full items-center justify-center'>
        {/* MAIN BOX */}
        <div className='relative h-[300px] w-[300px] bg-gray 2xl:h-[500px] 2xl:w-[500px]'>
          {/* LEFT BOX */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[260px] w-[150px] overflow-hidden rounded-tl-[100px] 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/18022068/pexels-photo-18022068/free-photo-of-reflection-of-a-young-woman-in-the-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Reflection of a Young Woman in the Mirror'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* MID BOX */}
          <div className='absolute left-1/2 top-1/2 z-[3] h-[250px] w-[200px] -translate-x-1/2 -translate-y-1/2 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/17127836/pexels-photo-17127836/free-photo-of-evening-photo-of-a-young-woman-sitting-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Evening Photo of a Young Woman Sitting in a Field'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* RIGHT BOX */}
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[260px] w-[150px] overflow-hidden rounded-br-[100px] 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/18076463/pexels-photo-18076463/free-photo-of-young-smiling-woman-standing-outside-with-arm-raised.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Young Smiling Woman Standing Outside with Arm Raised'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* UPPER RIGHT TEXT */}
          <h2 className='heading-3 2xl:heading-2 absolute -top-[15%] left-[40%] z-[2] whitespace-nowrap font-bold uppercase 2xl:-top-[10%]'>
            Join Mimosa
          </h2>

          {/* BOTTOM RIGHT TEXT */}
          <h2 className='2xl:heading-2 heading-3 absolute -bottom-[15%] right-[40%] z-[2] font-bold uppercase 2xl:-bottom-[10%]'>
            Community
          </h2>
        </div>

        {/* JOIN BUTTON */}
        <Link
          href='/sign-in'
          className='eq group absolute bottom-[20%] right-[20%] z-[1] flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-sm uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-red/50 2xl:bottom-[15%] 2xl:right-[10%] 2xl:h-40 2xl:w-40 2xl:text-lg'
        >
          <p className='z-[3]'>Join Now</p>

          {/* FILLER 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red group-hover:top-1/2'></span>

          {/* FILLER 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red group-hover:top-0'></span>
        </Link>
      </div>
    </div>
  );
};

export default Community;
