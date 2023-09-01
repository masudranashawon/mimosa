import Image from 'next/image';

const CommunityGathered = () => {
  return (
    <section className='section-padding-2 min-h-screen bg-dark'>
      <div className='wrapper relative flex h-full w-full items-center justify-center'>
        {/* BLOCKS */}
        <div className='relative grid h-[800px] w-[800px] grid-cols-10 2xl:h-[1000px] 2xl:w-[1000px]'>
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className='group z-[4] h-full w-full'>
              <div className='eq invisible h-full  w-full bg-violet opacity-50 group-hover:visible group-hover:bg-violet  group-hover:opacity-100'></div>
            </div>
          ))}

          {/* OVERLAY */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-violet/20'></div>

          {/* IMAGE */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/1461018/pexels-photo-1461018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Graceful Woman with her Arms Raised Underwater'
              width={1000}
              height={1000}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        {/* UPPER LEFT TEXT */}
        <div className='absolute left-0 top-[10%] z-[3] w-[50%] text-[2rem] font-semibold uppercase text-light 2xl:text-5xl'>
          {`Join now to Grab the`}{' '}
          <span className='text-violet'>{`"Mimosa Beauty Pass"`}</span>{' '}
          {`for all services at once!`}
        </div>

        {/* BOTTOM RIGHT TEXT */}
        <div className='absolute bottom-[10%] right-0 z-[3] w-[50%] text-right text-[2rem] font-semibold uppercase text-light 2xl:text-5xl'>
          {`3-month subscription,`} <span className='text-violet'>$300</span>.{' '}
          {`Limited time – join us today!`}
        </div>
      </div>
    </section>
  );
};

export default CommunityGathered;
