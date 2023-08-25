'use client';

import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setshouldOpenTab] = useState<number>(0);

  const handleClick = useCallback(
    (index: number) => {
      setshouldOpenTab(index);

      onClick && onClick;
    },
    [onClick]
  );

  return (
    <div className='flex flex-col gap-10 2xl:gap-20'>
      {/* TAB */}
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={cn(
              'eq flex h-[3rem] w-[12rem] items-center justify-center whitespace-nowrap border border-gray px-6 py-3 text-center text-sm font-semibold uppercase tracking-widest 2xl:h-[4rem] 2xl:w-[15rem] 2xl:text-lg',
              index === 0 && 'rounded-bl-2xl',
              index === tabs.length - 1 && 'rounded-tr-2xl',
              shouldOpenTab === index && 'border-dark bg-dark text-light'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? 'block' : 'hidden')}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;
