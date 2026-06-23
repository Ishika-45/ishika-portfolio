import React from 'react'

interface HeaderProps {
    title: string;
    as?: 'h1' | 'h2';
}

export default function Header({ title, as: Tag = 'h1' }: HeaderProps) {
    const sizeClasses = {
        h1: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
        h2: 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold',
        
    };
  
  return (
    <div className="py-14 md:py-20 flex flex-col items-center justify-center text-center">
        <Tag className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300 ${sizeClasses[Tag]}`}>
            {title}
        </Tag>

    </div>
  );
}

