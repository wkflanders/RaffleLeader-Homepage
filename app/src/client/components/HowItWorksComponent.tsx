import React, { useEffect, useRef, useState } from 'react';

const HowItWorksComponent: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fillProgress, setFillProgress] = useState([0, 0, 0]);
  const [scrollPaused, setScrollPaused] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (scrollPaused) {
        event.preventDefault();
        const newProgress = fillProgress[fillProgress.findIndex((progress) => progress < 100)] + event.deltaY * 0.1;
        const updatedProgress = [...fillProgress];
        const index = fillProgress.findIndex((progress) => progress < 100);
        updatedProgress[index] = Math.min(Math.max(newProgress, 0), 100);
        setFillProgress(updatedProgress);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75 && fillProgress.some((progress) => progress < 100)) {
          setScrollPaused(true);
          document.body.style.overflow = 'hidden';
        } else if (!entry.isIntersecting || fillProgress.every((progress) => progress >= 100)) {
          setScrollPaused(false);
          document.body.style.overflow = '';
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // Array from 0 to 1 with 0.01 steps
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = '';
    };
  }, [fillProgress, scrollPaused]);

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      if (box) {
        const fillElement = box.querySelector('.fill-animation') as HTMLElement;
        fillElement.style.height = `${fillProgress[index]}%`;

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
    <div ref={componentRef} className="py-30 mb-60 text-center text-white">
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
