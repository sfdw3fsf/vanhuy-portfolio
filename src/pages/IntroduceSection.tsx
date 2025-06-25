import { PageSectionWrapper } from '@/layout/PageWrapper';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function IntroduceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const intros = gsap.utils.toArray('.intro');

      gsap.set(intros, { y: 60, opacity: 0 });
      gsap.to(intros, {
        y: 0,
        opacity: 1,
        stagger: 1,
        ease: 'power1.out',
        duration: 3,
        scrollTrigger: {
          trigger: '.intro',
          // markers: true,
          start: 'top 80%',
          // end: 'bottom 45%',
          toggleActions: 'play reverse play reverse',
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <PageSectionWrapper ref={containerRef}>
      <h1 className='intro md:text-6xl text-2xl w-full font-bold text-taupe-4'>
        For me, a Front-End Developer should always spend time focusing on small UI details to bring comfort and smoothness to
        end-users
      </h1>
      <p className='md:text-xl text-lg text-taupe-4 mt-10 mb-4 intro'>I'm Van Huy</p>
      <div className='w-full grid md:grid-cols-12 grid-cols-1 '>
        <h1 className='md:col-span-5 text-4xl text-fawn intro '>Grateful...</h1>
        <p className='md:col-span-5 text-sm md:text-lg max-md: mt-4  text-taupe-2 intro'>
          I appreciate all my teammates' efforts, whether the task is unfamiliar, difficult, or not. A task is a task — it
          requires effort, and that's all.
          <br />
          <br />
          <span className='intro'>
            My former co-workers helped me gain a lot of new knowledge — a BA, a Designer, a BE, an FE, a HR, a Marketing, a
            Business Admin, a PM, and a QC. They gave me fresh perspectives, not only in work but also in life. We spent time
            working together, relaxing, and playing board games. When I left the company, my heart was filled with beautiful
            memories.
          </span>
          <br />
          <br />
          <span className='intro'>
            People often say that work is just stressful and only for earning a living, but to me, it’s also about connection,
            growth, and shared moments that truly matter.
          </span>
        </p>
      </div>
    </PageSectionWrapper>
  );
}

export default IntroduceSection;
