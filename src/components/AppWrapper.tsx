import React from 'react';

type AppWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className="flex h-screen bg-[#242526] flex-row w-full gap-2">
      <div className="m-auto w-80 border-[#3b89b9] border-[2px] rounded p-4">
        {children}
      </div>
    </div>
  );
};
