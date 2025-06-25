import useMediaQuery from '@/hooks/useMediaQuery';

function SideTittle({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className='text-fawn lg:text-3xl text-lg font-bold mb-1.5'>{title} </h3>
      <p className='text-base'>{description}</p>
    </div>
  );
}

function ResumeSection() {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section className='w-full relative lg:p-20 p-4 max-lg:z-11 max-lg:mt-30'>
      <img src='/images/image.png' alt='avatar' className='lg:max-w-[243px] max-w-[150px]' />
      <h1 className='lg:text-4xl text-xl font-bold leading-[50px] pt-10 pb-6 text-taupe-1'>
        Hi, I am Huy Van, <br /> Front-End Developer
      </h1>
      <p className='max-w-[500px] text-taupe-3 lg:text-lg text-sm'>
        I skilled in JavaScript and ReactJS. Archimedes once said, “Give me a place to stand, and I shall move the earth.” I may
        not be that great, but if you give me a chance, I’ll prove that you hired the right person.
      </p>
      <button
        type='button'
        className='rounded-lg relative py-3 mt-7 px-4 bg-fawn text-white hover:shadow-2xl hover:shadow-fawn transition-all ease-in-out duration-300 z-11'>
        Download CV
      </button>
      {/* Numeric */}
      {isAboveMediumScreens && (
        <div className='absolute flex flex-col gap-4 z-20 right-16 top-1/2 translate-y-1/3'>
          <SideTittle title={'1+'} description={' Year Of Experience'}></SideTittle>
          <SideTittle title={'7+'} description={' Completed Projects'}></SideTittle>
          <SideTittle title={'10K+'} description={' Working Hour'}></SideTittle>
        </div>
      )}
    </section>
  );
}

export default ResumeSection;
