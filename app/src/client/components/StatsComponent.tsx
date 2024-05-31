import React from 'react';

interface Stat {
  name: string;
  img: string;
  description: string;
}

interface StatsComponentProps {
  stats: Stat[];
}

const StatsComponent: React.FC<StatsComponentProps> = ({ stats }) => {
  const handleMouseEnter = (position: string) => {
    document.querySelectorAll(`.stat-box`).forEach((box) => {
      box.classList.remove(
        'grow',
        'push-right',
        'push-down',
        'push-left',
        'push-down-right',
        'push-up',
        'push-up-right',
        'push-up-left',
        'push-down-left'
      );
    });

    switch (position) {
      case 'top-left':
        document.querySelector('.bottom-left')?.classList.add('push-down');
        document.querySelector('.top-right')?.classList.add('push-right');
        document.querySelector('.bottom-right')?.classList.add('push-down-right');
        break;
      case 'top-right':
        document.querySelector('.bottom-right')?.classList.add('push-down');
        document.querySelector('.top-left')?.classList.add('push-left');
        document.querySelector('.bottom-left')?.classList.add('push-down-left');
        break;
      case 'bottom-left':
        document.querySelector('.top-left')?.classList.add('push-up');
        document.querySelector('.bottom-right')?.classList.add('push-right');
        document.querySelector('.top-right')?.classList.add('push-up-right');
        break;
      case 'bottom-right':
        document.querySelector('.top-right')?.classList.add('push-up');
        document.querySelector('.bottom-left')?.classList.add('push-left');
        document.querySelector('.top-left')?.classList.add('push-up-left');
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    document.querySelectorAll(`.stat-box`).forEach((box) => {
      box.classList.remove(
        'grow',
        'push-right',
        'push-down',
        'push-left',
        'push-down-right',
        'push-up',
        'push-up-right',
        'push-up-left',
        'push-down-left'
      );
    });
  };

  return (
    <div id='stats' className='mx-auto max-w-7xl sm:px-6 lg:px-8 mt-48'>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
          SUPERCHARGED RESULTS
        </p>
      </div>
      <div className='flex justify-center items-center w-full mt-16 sm:mt-20 lg:mt-24'>
        <dl className='w-full max-w-2xl grid grid-cols-1 gap-x-8 gap-y-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-y-12 lg:gap-y-12'>
          {stats.map((stat, index) => (
            <div
              key={stat.name}
              className={`stat-box relative p-14 border-slate-600 border-2 rounded-3xl ${
                index === 0 ? 'top-left' : ''
              } ${index === 1 ? 'top-right' : ''} ${index === 2 ? 'bottom-left' : ''} ${
                index === 3 ? 'bottom-right' : ''
              }`}
              onMouseEnter={() =>
                handleMouseEnter(
                  index === 0
                    ? 'top-left'
                    : index === 1
                    ? 'top-right'
                    : index === 2
                    ? 'bottom-left'
                    : 'bottom-right'
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <dt className='flex justify-center text-base'>
                <img src={stat.img} alt={stat.name} className='w-auto h-auto rounded-lg shadow-lg py-4 shadow-none' />
              </dt>
              <dd className='mt-2 text-base leading-7 text-black'>{stat.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StatsComponent;
