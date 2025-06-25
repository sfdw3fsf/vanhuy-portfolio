import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
   variant: 'imdb' | 'yellow' | 'white' | 'outlined_white' | 'gray'
   children: ReactNode
}

export default function Badge({ children, variant }: Props) {
   return (
      !!children && (
         <div
            className={twMerge(
               'inline-flex min-h-6 items-center justify-center rounded border px-1.5 text-xs',
               BadgeTheme[variant]
            )}
         >
            {children}
         </div>
      )
   )
}

const BadgeTheme = {
   imdb: 'text-white border-yellow-200 bg-transparent',
   yellow: 'text-black bg-yellow-200',
   white: 'text-black bg-white',
   outlined_white: 'bg-transparent text-white border-white',
   gray: 'bg-white/10 text-white border-none',
}
