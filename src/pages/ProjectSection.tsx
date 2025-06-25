import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

function ProjectItem({
  number,
  name,
  tech,
  setProject,
}: {
  number: number;
  name: string;
  tech: string[];
  setProject: (value: string) => void;
}) {
  const handleMouseEnter = () => {
    setProject(name);
  };

  const handleMouseLeave = () => {
    setProject('');
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='flex justify-start gap-5 border-b-1 border-text-2 lg:p-5 pb-3 group project'>
      <p className='lg:text-lg text-xs font-bold'>_0{number}.</p>
      <div className=''>
        <h2 className='lg:text-5xl text-2xl text-text flex gap-4 font-bold ease-in-out transition-all duration-700 bg-gradient-to-r from-golden to-taupe-3 from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left'>
          {name}
        </h2>
        <ul className='lg:text-lg text-xs flex gap-3'>
          {tech.map((item, index) => (
            <li className='flex items-center gap-2' key={index}>
              <span className='lg:text-base  text-taupe-3'>{item}</span>
              <span className='inline-block rounded-full w-2 h-2 bg-text-2'></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const projectsData = [
  {
    image: '/images/projects/windy.png',
    name: 'Ship Tracking',
    description:
      'This project was my responsibility within a team of six members. It was challenging at the beginning due to the lack of video tutorials or available guides. I had to thoroughly read the official documentation of each technology—like React Leaflet and the Windy API—and figure out how to combine them on my own.',
    role: 'Front-End Developer',
  },
  {
    image: '/images/projects/mint.png',
    name: 'Mint MD',
    description:
      'A medical document platform that connects patients with the right professors. I directly contributed to the UI and optimized performance using prefetching techniques, React Query, Zustand, and Tailwind CSS',
    role: 'Front-End Developer',
  },
  {
    image: '/images/projects/hyundai.png',

    name: 'Hyundai Livart',
    description:
      'A dynamic webpage developed for Hyundai Livart’s home furniture branch. I contributed by translating Figma designs into a pixel-perfect layout and ensuring smooth animations using HTML, SCSS, and JavaScript.',
    role: 'Front-End Developer',
  },
  {
    image: '/images/projects/big-plot.png',

    name: 'The Big Plot',
    description:
      'I also developed a storytelling webpage for a well-known book sold on Amazon, targeting customers from the UK and Japan. They requested a modern design, and I successfully met their expectations. The entire page was coded solely by me using HTML, SCSS, and JavaScript.',
    role: 'Front-End Developer',
  },
  {
    image: '/images/projects/edunet.png',

    name: 'Edunet',
    description:
      "This is an educational platform with a highly complex layout that required our team many long hours to meet the client's expectations. We completed it around Christmas and New Year, making the project especially memorable.",
    role: 'Front-End Developer',
  },
];

export default function ProjectSection() {
  const [project, setProject] = useState('');
  const hoverProject = projectsData.find((prj) => prj.name === project);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const techs = gsap.utils.toArray('.project');

      gsap.set(techs, { y: 60, opacity: 0 });
      gsap.to(techs, {
        y: 0,
        opacity: 1,
        stagger: 1,
        ease: 'power1.out',
        duration: 3,
        scrollTrigger: {
          trigger: '.project',
          // markers: true,
          start: 'top 80%',
          // end: 'bottom',
          toggleActions: 'play reverse play reverse',
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (!imageRef.current) return;
      gsap.set(imageRef.current, { y: 60, opacity: 0 });
      gsap.to(imageRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power1.out',
        duration: 3,
        scrollTrigger: {
          trigger: '.img-sec',
          // markers: true,
          start: 'top 80%',
          end: 'bottom 85%',
          toggleActions: 'play reverse play reverse',
          scrub: true,
        },
      });
    },
    { scope: imageRef },
  );

  useEffect(() => {
    projectsData.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <section className=' lg:p-30 p-4 grid gap-10 relative grid-cols-1 lg:grid-cols-2 '>
      <div id='projects' className='flex flex-col lg:max-w-[80%]  mb-10  ' ref={containerRef}>
        <div className='flex items-end project gap-2 mb-3'>
          <h1 className='text-2xl '>My Projects</h1>
          <img src='/icon/tree.png' alt='tree icon' className='object-cover max-h-10' />
        </div>
        <div className='flex gap-14 flex-col'>
          <ProjectItem
            setProject={setProject}
            number={1}
            name={'Ship Tracking'}
            tech={['React Leaflet', 'Windy Api', 'Geolocation']}
          />
          <ProjectItem setProject={setProject} number={2} name={'Mint MD'} tech={['ReactJS', 'React Query', 'Zustand']} />
          <ProjectItem setProject={setProject} number={3} name={'Hyundai Livart'} tech={['HTML', 'SCSS', 'Javascript']} />
          <ProjectItem setProject={setProject} number={4} name={'The Big Plot'} tech={['HTML', 'SCSS', 'Javascript']} />
          <ProjectItem setProject={setProject} number={5} name={'Edunet'} tech={['HTML', 'SCSS', 'Javascript']} />
        </div>
      </div>

      <div className='w-full relative ' ref={imageRef}>
        <div className='sticky top-16 img-sec '>
          <div className='mb-4  shadow-2xl shadow-taupe lg:h-[250px] rounded-2xl grid grid-cols-1 lg:grid-cols-8 p-4  '>
            <div className='lg:col-span-3 overflow-hidden '>
              <img
                src={hoverProject?.image || '/images/projects/three-d.png'}
                className='rounded-xl h-full object-cover w-full max-lg:h-60'
                alt='threeD'
              />
            </div>

            <div className='lg:col-span-5 flex flex-col justify-center pl-6 max-lg:mt-2'>
              <h3 className='lg:text-3xl text-xl font-bold mb-2 text-taupe-1'>
                {hoverProject?.name || '3D Portfolio Animation'}
              </h3>
              <p className='text-sm mb-4 text-taupe-3'>
                {hoverProject?.description ||
                  'A portfolio built with Three.js and GSAP, inspired by a 3D model from PeachyRoyalty. The layout design is influenced by toinfinite.dev and Josh W. Comeau, and coded by me - Van Huy'}
              </p>
              <p className='text-sm text-taupe-2'>
                <span className='font-semibold text-golden'>Role:</span> Front-End Developer
              </p>
            </div>
          </div>

          <div className='w-full h-[300px]  rounded-2xl  overflow-hidden  '>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=K91_J3hXVIg&ab_channel=VanHuy'
              playing
              loop
              muted
              controls={false}
              width='100%'
              height='100%'
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    loop: 1,
                    playlist: 'K91_J3hXVIg', // required for loop
                    modestbranding: 1,
                    rel: 0,
                    controls: 0,
                    showinfo: 0,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// https://coolors.co/5e5345-d5a021-ede7d9-a49694-736b60
