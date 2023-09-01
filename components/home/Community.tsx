import Image from 'next/image';

const Community = () => {
  return (
    <div className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        {/* MAIN BOX */}
        <div className='relative h-[300px] w-[300px] bg-gray 2xl:h-[500px] 2xl:w-[500px]'>
          {/* LEFT BOX */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[260px] w-[150px] overflow-hidden rounded-tl-[100px] bg-purple-400 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Beautician putting cosmetic product on female client face'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* MID BOX */}
          <div className='absolute left-1/2 top-1/2 z-[3] h-[250px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-purple-300 2xl:h-[400px] 2xl:w-[350px]'>
            <Image
              src='https://images.pexels.com/photos/5938539/pexels-photo-5938539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Calm African American female in bathrobe touching face against blue background'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* RIGHT BOX */}
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[260px] w-[150px] rounded-br-[100px] bg-purple-400 2xl:h-[400px] 2xl:w-[300px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Community;
