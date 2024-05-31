import React, { useEffect, useRef, useState } from 'react';

interface HowItWorksComponentProps {
  onCompletion: () => void;
}

const HowItWorksComponent: React.FC<HowItWorksComponentProps> = ({ onCompletion }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fillProgress, setFillProgress] = useState([0, 0, 0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scrolling behavior

      if (currentIndex < fillProgress.length && fillProgress[currentIndex] < 100) {
        const updatedProgress = [...fillProgress];
        updatedProgress[currentIndex] = 100;
        setFillProgress(updatedProgress);

        setTimeout(() => {
          if (updatedProgress.every((progress) => progress >= 100)) {
            onCompletion();
          } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
        }, 800); // Wait for 1 second before moving to the next box
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75 && fillProgress.some((progress) => progress < 100)) {
          window.addEventListener('wheel', handleScroll, { passive: false });
        } else {
          window.removeEventListener('wheel', handleScroll);
        }
      },
      { threshold: [0.75] }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleScroll);
    };
  }, [fillProgress, currentIndex, onCompletion]);

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      if (box) {
        const fillElement = box.querySelector('.fill-animation') as HTMLElement;
        fillElement.style.height = `${fillProgress[index]}%`;
        fillElement.style.transition = 'height 1s'; // Ensure the fill animation takes 1 second

        const textElements = box.querySelectorAll('.text-content') as NodeListOf<HTMLElement>;
        textElements.forEach((textElement) => {
          if (fillProgress[index] > 50) {
            textElement.classList.add('text-background-color');
          } else {
            textElement.classList.remove('text-background-color');
          }
        });
      }
    });
  }, [fillProgress]);

  return (
    <div ref={componentRef} className="py-30 text-center text-white">
      <h2 className="font-overpass text-2xl font-light text-white sm:text-4xl lg:text-6xl mb-30">How It Works</h2>
      <div className="flex justify-center items-stretch mx-auto gap-10" style={{ maxWidth: '1200px' }}>
        <div
          ref={(el) => (boxRefs.current[0] = el)}
          className="fill-container flex flex-col justify-center bg-translucent text-white p-20 rounded-3xl border border-white w-1/3"
        >
          <div className="fill-animation"></div>
          <h3 className="text-3xl text-left font-semibold text-content">Create Campaign</h3>
          <p className="text-md text-left text-content">Sign up and create campaigns around your event.</p>
        </div>
        <div
          ref={(el) => (boxRefs.current[1] = el)}
          className="fill-container flex flex-col justify-center bg-translucent text-white p-20 rounded-3xl border border-white w-1/3"
        >
          <div className="fill-animation"></div>
          <h3 className="text-3xl text-left font-semibold text-content">
            Share Page <br /> & Let Users <br /> Predict Date
          </h3>
          <p className="text-md text-left text-content">Users sign up and you get new leads.</p>
        </div>
        <div
          ref={(el) => (boxRefs.current[2] = el)}
          className="fill-container flex flex-col justify-center bg-translucent text-white p-20 rounded-3xl border border-white w-1/3"
        >
          <div className="fill-animation"></div>
          <h3 className="text-3xl text-left font-semibold text-content">
            Winner <br /> Gets Notified <br /> Automatically
          </h3>
          <p className="text-md text-left text-content">We automatically notify you and winner when event occurs.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksComponent;
