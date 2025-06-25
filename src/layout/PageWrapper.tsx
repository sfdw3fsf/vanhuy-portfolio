import { ReactRef } from '@gsap/react';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
  ref?: ReactRef;
};

function PageWrapper({ className, children }: Props) {
  return <div className={twMerge(' w-full relative  max-w-[1720px] h-[400vh]', className)}>{children}</div>;
}

export function PageSectionWrapper({ className, children, ref }: Props) {
  return (
    <div className={twMerge(' w-full lg:px-30 lg:py-24 p-4 max-lg:mt-16 ', className)} ref={ref}>
      {children}
    </div>
  );
}

export default PageWrapper;
