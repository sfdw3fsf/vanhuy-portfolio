import { PageSectionWrapper } from '@/layout/PageWrapper';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function MyStackSection() {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const techs = gsap.utils.toArray('.tech');

      gsap.set(techs, { y: 60, opacity: 0 });
      gsap.to(techs, {
        y: 0,
        opacity: 1,
        stagger: 0.7,
        ease: 'power1.out',
        duration: 3,
        scrollTrigger: {
          trigger: '.tech',
          start: 'top 80%',
          end: 'bottom 35%',
          toggleActions: 'play reverse play reverse',
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <PageSectionWrapper ref={containerRef}>
      <div className='flex items-end gap-2 mb-10 tech'>
        <h3 className='text-2xl text-taupe-2 '>My Stack</h3>
        <img src='/icon/tree.png' alt='tree icon' className='object-cover max-h-10' />
      </div>

      <section className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='grid col-span-5'>
          <h2 className='lg:text-5xl text-2xl max-lg:my-3 font-bold text-taupe-3 tech'>Front-End</h2>
        </div>
        <div className='col-span-6 flex flex-wrap gap-x-11 gap-y-9'>
          <TechItem name={'JavaScript'} image={'/images/tech_logo/js.png'} />
          <TechItem name={'React'} image={'/images/tech_logo/react.png'} />
          <TechItem name={'NextJS'} image={'/images/tech_logo/next.webp'} />
          <TechItem name={'Redux'} image={'/images/tech_logo/redux.png'} />
          <TechItem name={'TypeScript'} image={'/images/tech_logo/ts.png'} />

          <TechItem name={'SASS'} image={'/images/tech_logo/sass.webp'} />
          <TechItem name={'Tailwind'} image={'/images/tech_logo/tailwind.png'} />
          <TechItem name={'Framer Motion'} image={'/images/tech_logo/framer-motion.webp'} />
          <TechItem name={'Bootstrap'} image={'/images/tech_logo/bootstrap.svg'} />
          <TechItem name={'GSAP'} image={'/images/tech_logo/gsap.png'} />
        </div>
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-12 mt-20 '>
        <div className='grid col-span-5'>
          <h2 className='lg:text-5xl text-2xl font-bold text-taupe-3 max-lg:mb-3 tech'>Others</h2>
        </div>
        <div className='col-span-7 flex flex-wrap gap-x-11 gap-y-9'>
          <TechItem name={'MySQL'} image={'/images/tech_logo/mysql.svg'} />
          <TechItem name={'Postgre'} image={'/images/tech_logo/postgreSQL.webp'} />
          <TechItem name={'Git'} image={'/images/tech_logo/git.png'} />
        </div>
      </section>
    </PageSectionWrapper>
  );
}

export default MyStackSection;
function TechItem({ name, image }: { name: string; image: string }) {
  return (
    <div className={twMerge('flex gap-3.5 items-center tech')}>
      <img className='md:max-h-10 max-h-7' src={image} alt='Tech Logo'></img>
      <p className='md:text-2xl text-lg '>{name}</p>
    </div>
  );
}
