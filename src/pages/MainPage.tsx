import ScrollProgressIndicator from '@/components/progress/ScrollProgress';
import PageWrapper from '@/layout/PageWrapper';
import { ReactRef, useGSAP } from '@gsap/react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import AboutMeSection from './AboutMeSection';
import IntroduceSection from './IntroduceSection';
import MyExperienceSection from './MyExperienceSection';
import MyStackSection from './MyStackSection';
import ProjectSection from './ProjectSection';
import ResumeSection from './ResumeSection';

function ForestScene({ ref }: { ref: ReactRef }) {
  const model = useGLTF('/forest_house-v1.glb');
  const modelRef = useRef<THREE.Object3D>(null);
  const { camera } = useThree();

  useGSAP(
    () => {
      if (!modelRef.current || !camera || !ref.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          endTrigger: '.experience-section',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tl.fromTo(modelRef.current.position, { x: 0.5, y: 1, z: 3.1 }, { x: 0, y: -4.07, z: -2.12, duration: 1 }, 0)
        .fromTo(modelRef.current.rotation, { y: 0 }, { y: 0.25, duration: 1 }, 0)
        .fromTo(camera.position, { x: -26.43, y: 11.2, z: 15.43 }, { x: -34, y: 12.5, z: 2.6, duration: 1 }, 0)
        .fromTo(camera, { fov: 29 }, { fov: 17, duration: 1, onUpdate: () => camera.updateProjectionMatrix() }, 0);

      const autoRotate = gsap.to(modelRef.current.rotation, {
        y: '+=0.3',
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        paused: false,
        overwrite: 'auto',
      });
      let wasRotating = false;
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        endTrigger: '.experience-section',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.01 || progress > 0.99) {
            if (!wasRotating) {
              autoRotate.play();
              wasRotating = true;
            }
          } else {
            if (wasRotating) {
              autoRotate.pause();
              wasRotating = false;
            }
          }
        },
      });
    },
    { dependencies: [camera], scope: ref },
  );
  return (
    // <TransformControls object={modelRef}>
    <primitive ref={modelRef} object={model.scene} scale={[55, 55, 55]} />
    // </TransformControls>
  );
}

function MainPage() {
  const controlsRef = useRef<any>(null);
  const scopeRef = useRef<HTMLDivElement>(null);

  return (
    <PageWrapper className=' no-scrollbar'>
      <div className='w-full mx-auto relative z-9 flex flex-col '>
        <div className='scroll-container w-full mx-auto relative z-9 flex flex-col scroll-container' ref={scopeRef}>
          <ResumeSection />
          <MyExperienceSection />

          <div className='absolute top-0 left-0 right-0 bottom-[-30px] z-10 '>
            <Canvas camera={{ position: [-26.43, 11.2, 15.43], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <pointLight position={[0, 3, 3]} intensity={2} />
              <Suspense fallback={null}>
                <ForestScene ref={scopeRef} />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                ref={controlsRef}
                minPolarAngle={1.22}
                onChange={() => {
                  const controls = controlsRef.current;
                  if (controls) {
                    // const polar = controls.getPolarAngle();
                    // const camPos = controls.object?.position;
                    // const fov = controls.object?.fov;
                    // const roation = controls.object?.rotation;
                    // console.log('🎯 Polar Angle:', polar.toFixed(3));
                    // console.log('📸 Camera Position:', camPos.x.toFixed(2), camPos.y.toFixed(2), camPos.z.toFixed(2));
                    // console.log('🔭 FOV:', fov);
                    // console.log('Rotaion nha', roation);
                  }
                }}
              />
            </Canvas>
          </div>
        </div>
        <IntroduceSection />
        <ProjectSection />
        <MyStackSection />
        <AboutMeSection />
        {/* Footer */}
        <div className='flex flex-col gap-4 justify-center w-full items-center p-10 mb-5'>
          <p className='text-lg text-golden'>Please feel free to contact me</p>
          <div className='flex flex-col justify-center items-center'>
            <a
              href={`mailto:${'huy820op@gmail.com'}`}
              className='text-3xl sm:text-4xl font-anton inline-block mt-5  hover:underline text-taupe-1'>
              huy820op@gmail.com
            </a>
            <p className='text-lg text-taupe-1 pt-4'>Thanks for watching ^^</p>
          </div>
        </div>

        <ScrollProgressIndicator />
      </div>
    </PageWrapper>
  );
}

useGLTF.preload('/forest_house-v1.glb');
export default MainPage;
