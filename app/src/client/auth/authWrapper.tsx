import { ReactNode } from 'react';

export function AuthWrapper({children} : {children: ReactNode }) {
  return (
    <div className='flex justify-center min-h-screen flex-col pt-10 sm:px-6 lg:px-8'>
      <div className='flex h-full sm:w-1/3 sm:max-w-1/3'>
        <div className='bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
          <div className='-mt-8'>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}
