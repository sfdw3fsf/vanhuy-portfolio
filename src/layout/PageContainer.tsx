import Preloader from '@/components/preloader/Preloader';
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router';
import NavbarAnimation from './NavAnimation';
function PageContainer() {
  return (
    <ReactLenis
      className='no-scrollbar'
      root
      options={{
        lerp: 0.1,
        duration: 1.4,
      }}>
      {/* <Navbar /> */}
      <NavbarAnimation />
      <div className='flex h-full min-h-[calc(100vh)]  w-full flex-col items-center no-scrollbar'>
        <Preloader />
        <Outlet />
      </div>
    </ReactLenis>
  );
}

export default PageContainer;
