import React from 'react';
import './style.css';

export default function StepsProgressBar({ steps, currentStep }) {
  return (
    <div className='steps-progress-bar'>
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        return (
          <div key={index} className={`step ${isActive ? 'active' : ''}`}>
            <div className='step-circle'>{index + 1}</div>
            {index < steps.length - 1 && (
              <div className={`step-line ${isActive ? 'active' : ''}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
