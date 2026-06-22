import React from 'react'

interface HeaderProps {
    title: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Header({ title, as: Tag = 'h1' }: HeaderProps) {
    const sizeClasses = {
        h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
        h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold',
        h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium',
        h4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal',
        h5: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-light',
        h6: 'text-base sm:text-lg md:text-xl lg:text-2xl font-thin',
    };
  
  return (
    <div className="py-14 md:py-20 flex flex-col items-center justify-center text-center">
        <Tag className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300 ${sizeClasses[Tag]}`}>
            {title}
        </Tag>

    </div>
  );
}

