import * as React from 'react';

export interface IMainContainerProps {
children:any
}

export function MainContainer ({children}: IMainContainerProps) {
  return (
    <main className="px-[2rem] md:px-[3rem] lg:px-[13.438rem] py-[3rem] md:py-[4.375rem] bg-[#fdfcfd]">
        {children}
    </main>
  );
}
