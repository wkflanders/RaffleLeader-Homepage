import React, { useState, useEffect, useRef } from 'react';

// Define TypeScript interfaces for props and feature objects
interface Feature {
  name: string;
  img: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const FeaturesComponent: React.FC<FeaturesProps> = ({ features }) => {
  const backgroundColors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500'];
  const [activeBg, setActiveBg] = useState(backgroundColors[0]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    featureRefs.current = featureRefs.current.slice(0, features.length);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = featureRefs.current.findIndex(ref => ref === entry.target);
          setActiveBg(backgroundColors[index % backgroundColors.length]);
        }
      });
    }, { threshold: 0.7 });

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [features.length]);

  return (
    <div className={`relative w-full overflow-hidden snap-y snap-mandatory ${activeBg}`}>
      {features.map((feature, index) => (
        <div
          ref={el => featureRefs.current[index] = el}
          data-feature={feature.name}
          key={feature.name}
          className="snap-start h-screen p-20 flex flex-col md:flex-row items-center justify-between gap-x-8 sm:gap-x-10"
        >
          <div className={`border border-t-2 border-b-2 flex-1 flex justify-center items-center ${index % 2 === 0 ? 'rounded-r-lg -ml-6' : 'rounded-l-lg -mr-6'} p-4`}>
            <img src={feature.img} alt={feature.name} className="max-h-full max-w-full rounded-lg shadow-lg" />
          </div>
          <div className='flex-1 flex justify-center items-center p-20'>
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-light text-white sm:text-4xl lg:text-5xl pb-4">{feature.name}</h2>
              <p className="text-base font-light text-white sm:text-lg lg:text-xl">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturesComponent;
