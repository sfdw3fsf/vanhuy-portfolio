import dogAnimation from '@/assets/icons/dog.json';
import fishAnimation from '@/assets/icons/fish.json';
import lampAnimation from '@/assets/icons/lamp.json';

import bookAnimation from '@/assets/icons/book.json';
import { PageSectionWrapper } from '@/layout/PageWrapper';
import Lottie from 'lottie-react';

function AboutMeSection() {
  return (
    <PageSectionWrapper className=' mt-0'>
      <div id='about-me' className='grid grid-cols-1 lg:grid-cols-8  gap-2 text-white rounded-xl'>
        {/* Top Section */}

        <div className='lg:col-span-4 lg:row-span-3 bg-[#000] p-6 rounded-2xl relative'>
          <h1 className='text-2xl text-fawn font-bold'>My Education</h1>
          <div className='mt-6'>
            <h2 className='text-xl mb-1 text-main-100'>FPT University</h2>
            <p className='text-base text-taupe'>Software Engineering</p>
          </div>
          <div className='mt-6'>
            <h2 className='text-xl mb-1 text-main-100'>Le Khiet High School for the Gifted</h2>
            <p className='text-base text-white'>Physics Major</p>
          </div>
          <div className='mt-6'>
            <h2 className='text-xl mb-1 text-main-100'>TOEIC 825 - IIG</h2>
            <p className='text-base text-white'>Issued in May 2025</p>
          </div>
          <div className='absolute right-0 top-10'>
            <Lottie animationData={lampAnimation} loop autoplay className='w-40 lg:w-78' />
          </div>

          <div className='border-t-1 mt-9 solid w-full gap-6 py-3 border-border-soft'>
            <div>
              <p>
                <strong className='text-fawn'>I also learn trading enjoy trading for fun for 3 years.</strong>
              </p>

              <p className='text-sm mt-3'>Even if I don't make much profit, it helps me practice patience and stay calm.</p>
            </div>
            {/* <img src='/images/trading.png' className='max-w-full' /> */}
          </div>
        </div>

        <div className='lg:col-span-2 lg:col-start-5 lg:row-start-1 lg:row-span-2 bg-[#000] p-6 rounded-2xl relative'>
          <p className='text-fawn'>
            If you ask me about my current <strong>goal</strong>…
          </p>
          <p className='mt-2 text-sm'>
            Honestly, I want to master the Frontend role first. Once I have enough free time, I plan to learn 3D design and become
            a 3D artist. I also plan to take the IELTS exam next year and aim for an overall score of 8.0+.
          </p>
          <div className='absolute right-1/2 translate-x-1/2 top-40'>
            <Lottie animationData={fishAnimation} loop autoplay className='w-full' />
          </div>
        </div>

        <div className='lg:col-span-2 lg:col-start-7 lg:row-start-1 bg-[#000] p-6 rounded-2xl'>
          <p className='text-xl font-bold'>Van Huy</p>
          <p className='text-sm mt-2'>
            I was born in <strong className='text-fawn'>Quang Ngai City</strong> in 2002.
          </p>
          <p className='mt-2 text-sm'>Italy and Switzerland are the places I want to visit before I turn 28.</p>
        </div>

        <div className='lg:col-span-2 lg:col-start-5 lg:row-start-3 bg-[#000] p-6 rounded-2xl'>
          <p>
            <strong>The most memorable exam I took</strong>
          </p>

          <p className='text-sm mt-1'>
            A physics contest where I scored 17.5/20, and a gifted high school entrance exam with 8.5/10
          </p>
          {/* <img src='/images/trading.png' className='max-w-40' /> */}
        </div>

        <div className='lg:col-span-2 lg:col-start-7 lg:row-end-6 lg:row-start-2 bg-[#000] p-6 rounded-2xl'>
          <p className='text-sm'>
            I used to publish videos on social media and gained <strong className='text-fawn'>millions of views</strong>. Maybe
            that counts as a small talent.
          </p>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-3 flex-wrap'>
              <img alt='views' src='/images/3k.png' className='object-contain h-15 w-30' />
              <img alt='views' src='/images/4k.png' className='object-contain  h-15 w-30' />
            </div>
            <div className='flex flex-row gap-3 flex-wrap'>
              <img alt='views' src='/images/5k.png' className='object-contain  h-15 w-30' />
              <img alt='views' src='/images/8k.png' className='object-contain  h-15 w-30' />
            </div>
          </div>

          <div className='mt-4 border-t solid border-border-soft pt-5 text-sm'>
            <h1>This part is for later, when I think of some new facts...</h1>
          </div>
        </div>

        {/* Bottom Section */}

        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-4 row-span-2 bg-[#000] p-6 rounded-2xl'>
          <p className='text-sm'>In a twist of fate, I'm an animal lover.</p>
          <p className='text-sm mt-2'>I feel safe and at peace when I'm around animals, especially dogs.</p>
          <Lottie animationData={dogAnimation} loop autoplay className='w-50' />
        </div>

        <div className='lg:col-span-4 lg:col-start-3 lg:row-start-4 row-span-2 bg-[#000] p-6 rounded-2xl'>
          <p className='text-2xl font-bold text-fawn'>I also enjoy reading books.</p>
          <p className='text-sm pt-2'>
            Someone once told me: “One book is <strong className='text-fawn'>many years</strong> of someone's experience. Imagine
            if you read a thousand of them?”
          </p>
          <p className='text-sm pt-2'>
            Reading books also helps me strengthen my mental health, especially during challenging times in life. The first book
            series I ever completed was Many Lives - Many Times.
          </p>
          {/* <div className='place-self-center'> */}
          <Lottie animationData={bookAnimation} loop autoplay className='w-40' />
          {/* </div> */}
        </div>
      </div>
    </PageSectionWrapper>
  );
}

export default AboutMeSection;
