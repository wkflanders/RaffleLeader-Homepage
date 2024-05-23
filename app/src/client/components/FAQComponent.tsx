import React, { useState } from 'react';
import { faqs } from '../landing-page/contentSections';  // Ensure this path is correct

function FAQComponent() {
  // Initialize answerVisible state with all FAQs set to 'false' (hidden)
  const [answerVisible, setAnswerVisible] = useState(Array(faqs.length).fill(false));

  // Function to toggle the visibility of an FAQ answer
  const toggleAnswer = (index: number): void => {
    setAnswerVisible(current => {
      const newVisibility = [...current];
      newVisibility[index] = !newVisibility[index];  // Toggle the state for the specific FAQ
      return newVisibility;
    });
  };

  return (
    <div className='mt-32 mb-32 mx-auto max-w-2xl divide-y divide-gray-900/10 dark:divide-gray-200/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
        FAQs
      </h2>
      <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
        {faqs.map((faq, index) => (
          <div key={faq.id} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5 dark:text-white'>
              <button 
                type="button" 
                className="flex items-center gap-2"
                onClick={() => toggleAnswer(index)} // Toggle answer visibility when button is clicked
              >
                {faq.question}
              </button>
            </dt>
            <dd className={`flex items-center justify-start gap-2 mt-4 lg:col-span-7 lg:mt-0 ${answerVisible[index] ? '' : 'hidden'}`}>
              <p className='text-base leading-7 text-gray-600 dark:text-white'>{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default FAQComponent;