import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function ExperienceItem({ company, position, time }: { company: string; position: string; time: string }) {
  return (
    <div>
      <p className='text-lg exp text-taupe-2'>{company}</p>
      <h2 className='lg:text-5xl text-xl font-bold mt-3.5 mb-2.5 exp text-taupe-3'>{position}</h2>
      <p className='lg:text-lg text-sm exp text-taupe-3'>{time}</p>
    </div>
  );
}

function MyExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const exps = gsap.utils.toArray('.exp');

      gsap.set(exps, { y: 60, opacity: 0 });
      gsap.to(exps, {
        y: 0,
        opacity: 1,
        stagger: 1,
        ease: 'power1.out',
        duration: 3,
        scrollTrigger: {
          trigger: '.exp',
          // markers: true,
          start: 'top 80%',
          end: 'bottom 45%',
          toggleActions: 'play reverse play reverse',
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id='my-experience'
      className='pl-10 pb-32  mt-64 flex flex-col place-self-end w-fit experience-section z-11 mr-20'>
      <div className='flex items-end gap-2 mb-10 exp'>
        <h3 className='text-2xl text-taupe-2 '>My Experience</h3>
        <img src='/icon/tree.png' alt='tree icon' className='object-cover max-h-10' />
      </div>

      <div className='flex gap-14  flex-col'>
        <ExperienceItem company='Wala-ICT' position='Front-End Developer' time='Aug 2024 - Apr 2025' />
        <ExperienceItem company='FSOFT' position='Software Engineer' time='Dec 2022 - Apr 2023' />
      </div>
    </section>
  );
}

export default MyExperienceSection;
