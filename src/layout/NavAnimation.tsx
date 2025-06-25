'use client';
import { cn } from '@/lib/utils'; // If you're not using this, remove cn()
import { MoveUpRight } from 'lucide-react';
import { useState } from 'react';

const COLORS = ['bg-yellow-500 text-black', 'bg-blue-500 text-white', 'bg-teal-500 text-black', 'bg-indigo-500 text-white'];

const MENU_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About Me', url: '/#about-me' },
  { name: 'Experience', url: '/#my-experience' },
  { name: 'Projects', url: '/#projects' },
];

const NavbarAnimation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button className='group size-12 fixed top-5 right-5 z-[50]' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span
          className={cn(
            'inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]',
            {
              'rotate-45 -translate-y-1/2 bg-white': isMenuOpen,
              'group-hover:rotate-12 bg-black': !isMenuOpen,
            },
          )}
        />
        <span
          className={cn(
            'inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]',
            {
              '-rotate-45 -translate-y-1/2 bg-white': isMenuOpen,
              'group-hover:-rotate-12 bg-black': !isMenuOpen,
            },
          )}
        />
      </button>

      {/* Overlay */}
      <div
        className={cn('fixed inset-0 z-[11] bg-black/70 transition-all duration-150', {
          'opacity-0 invisible pointer-events-none': !isMenuOpen,
        })}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform transition-transform duration-700 z-[12] overflow-hidden gap-y-14 bg-[#1c1c1c]',
          'flex flex-col justify-center py-10 text-white px-8',
          {
            'translate-x-0': isMenuOpen,
            'translate-x-full': !isMenuOpen,
          },
        )}>
        {/* MENU */}
        <div className='relative z-[20]'>
          <p className='text-gray-400 mb-4'>MENU</p>
          <ul className='space-y-4'>
            {MENU_LINKS.map((link, idx) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    window.location.href = link.url;
                    setIsMenuOpen(false);
                  }}
                  className='group text-xl flex items-center gap-3'>
                  <span
                    className={cn(
                      'size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                      COLORS[idx],
                    )}>
                    <MoveUpRight size={8} className='scale-0 group-hover:scale-100 transition-all' />
                  </span>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className='relative z-[20] mt-16'>
          <p className='text-gray-400 mb-4'>CONTACT ME</p>
          <ul className='space-y-2'>
            {[{ name: 'linkedIn', url: 'https://www.linkedin.com/in/vanhuy86/' }].map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target='_blank'
                  rel='noreferrer'
                  className='capitalize text-fawn font-bold text-lg hover:underline'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a className='capitalize text-lg inline-block space-y-2 '>
            <strong className='text-fawn'>Phone:</strong> 0935-424-583
          </a>
          <p className='text-lg space-y-2'>
            <strong className='text-fawn'>Email: </strong>huy820op@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default NavbarAnimation;
