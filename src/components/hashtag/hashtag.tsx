import * as React from 'react';

export interface IHashtagProps {
    children:string
}

export function Hashtag ({children}: IHashtagProps) {
  return (
    <p className="bg-[#F7F7F7] p-[8px] rounded-[100px] text-BoldGray select-none cursor-pointer">
      {children}
    </p>
  );
}
