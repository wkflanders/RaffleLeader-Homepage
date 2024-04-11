import { ReactNode } from 'react';
import banner from '../static/LOGIN-BANNER.svg';

export function AuthWrapper({children} : {children: ReactNode }) {
  return (
    <div className='grid grid-cols-3 min-h-screen'>
      {/* Login form taking up 1/3 of the space */}
      <div className='flex flex-col col-span-1 justify-center bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
        <div>
          {children}
        </div>
      </div>

      {/* Image taking up 2/3 of the space */}
      <div className="col-span-2 bg-gray-100 overflow-hidden"> {/* This ensures no overflow */}
        <img className='w-full h-auto' src={banner} alt='Raffle Leader' style={{ objectFit: 'cover', height: '100vh' }} />
      </div>
    </div>
  );
}
