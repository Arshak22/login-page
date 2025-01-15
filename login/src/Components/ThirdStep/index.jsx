import React, { useState, useEffect } from 'react';
import './style.css';

import StepsProgressBar from '../StepsProgressBar';
import UserInfo from '../UserInfo';

// Bank icons
import Ակբա from '../../images/bank-icons/Ակբա բանկ.webp';
import Ամերիաբանկ from '../../images/bank-icons/Ամերիաբանկ.webp';
import ԱՄԻՕ from '../../images/bank-icons/ԱՄԻՕ բանկ.webp';
import ԱյԴի from '../../images/bank-icons/ԱյԴի Բանկ.webp';
import ԱրարատԲանկ from '../../images/bank-icons/ԱրարատԲանկ.webp';
import Արդշինբանկ from '../../images/bank-icons/Արդշինբանկ.webp';
import Արդշինինվեստբանկ from '../../images/bank-icons/Արդշինինվեստբանկ.webp';
import Արմսվիսբանկ from '../../images/bank-icons/Արմսվիսբանկ.webp';
import Արցախբանկ from '../../images/bank-icons/Արցախբանկ.webp';
import Բիբլոս from '../../images/bank-icons/Բիբլոս Բանկ Արմենիա.webp';
import Էվոկաբանկ from '../../images/bank-icons/Էվոկաբանկ.webp';
import Ինեկոբանկ from '../../images/bank-icons/Ինեկոբանկ.webp';
import Կոնվերս from '../../images/bank-icons/Կոնվերս Բանկ.webp';
import Հայէկոնոմբանկ from '../../images/bank-icons/Հայէկոնոմբանկ.webp';
import Մելլաթ from '../../images/bank-icons/Մելլաթ Բանկ.webp';
import Յունիբանկ from '../../images/bank-icons/Յունիբանկ.webp';
import ՎՏԲ from '../../images/bank-icons/ՎՏԲ-Հայաստան բանկ.webp';
import Ֆասթբանկ from '../../images/bank-icons/Ֆասթբանկ.webp';

const banks = {
  Ակբա: Ակբա,
  Ամերիաբանկ: Ամերիաբանկ,
  ԱՄԻՕ: ԱՄԻՕ,
  'ԱյԴի Բանկ': ԱյԴի,
  ԱրարատԲանկ: ԱրարատԲանկ,
  Արդշինբանկ: Արդշինբանկ,
  Արդշինինվեստբանկ: Արդշինինվեստբանկ,
  Արմսվիսբանկ: Արմսվիսբանկ,
  Արցախբանկ: Արցախբանկ,
  Բիբլոս: Բիբլոս,
  Էվոկաբանկ: Էվոկաբանկ,
  Ինեկոբանկ: Ինեկոբանկ,
  'Կոնվերս Բանկ': Կոնվերս,
  Հայէկոնոմբանկ: Հայէկոնոմբանկ,
  'Մելլաթ Բանկ': Մելլաթ,
  Յունիբանկ: Յունիբանկ,
  'ՎՏԲ-Հայաստան բանկ': ՎՏԲ,
  Ֆասթբանկ: Ֆասթբանկ,
};

export default function ThirdStep() {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  const [error, setError] = useState('');

  const [inputs, setInputs] = useState([
    { selectedBank: '', fileType: 'PDF', file: null, dropdownOpen: false },
  ]);

  const handleAddRow = () => {
    setInputs([
      ...inputs,
      { selectedBank: '', fileType: 'PDF', file: null, dropdownOpen: false },
    ]);
  };

  const handleDeleteRow = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const handleBankSelect = (index, bankName) => {
    closeDropdowns();
    const updatedInputs = [...inputs];
    updatedInputs[index].selectedBank = bankName;
    setInputs(updatedInputs);
  };

  const toggleDropdown = (index) => {
    const updatedInputs = inputs.map((item, i) => ({
      ...item,
      dropdownOpen: i === index ? !item.dropdownOpen : false,
    }));
    setInputs(updatedInputs);
  };

  const closeDropdowns = () => {
    setInputs(inputs.map((item) => ({ ...item, dropdownOpen: false })));
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.qaxvacq-input-section')) {
      closeDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [inputs]);

  const handleSendData = () => {
    let isValid = true;
    setError('');

    const collectedData = inputs.map((input, index) => {
      if (!input.selectedBank) {
        isValid = false;
      }
      if (!input.file) {
        isValid = false;
      }

      return {
        selectedBank: input.selectedBank,
        fileType: input.fileType,
        file: input.file ? input.file : null,
      };
    });

    if (!isValid) {
      setError('Բոլոր դաշտերը պարտադիր են');
      return;
    }

    console.log('Collected Data:', collectedData);
  };

  useEffect(() => {
    document.title = 'Third Step';
  }, []);

  return (
    <div className='first-step third-step'>
      <UserInfo />

      <div className='add-qaxvacq-section'>
        <h2>Ավելացրեք քաղվածքներ</h2>
        <div
          className={`qaxvacq-input-section ${
            inputs.length > 3 ? 'small-input-section' : ''
          }`}
        >
          {inputs.map((input, index) => (
            <div key={index} className='grouped-inputs'>
              <div className='input-col'>
                <label>Ընտրեք բանկը</label>
                <div
                  className='bank-dropdown'
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(index);
                  }}
                >
                  <div className='bank-dropdown-selected'>
                    {input.selectedBank ? (
                      <div className='bank-selected-item'>
                        <img
                          src={banks[input.selectedBank]}
                          alt={input.selectedBank}
                        />
                        <span>{input.selectedBank}</span>
                      </div>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  {input.dropdownOpen && (
                    <div className='bank-dropdown-menu'>
                      {Object.entries(banks).map(([name, icon]) => (
                        <div
                          key={name}
                          className='bank-dropdown-item'
                          onClick={() => handleBankSelect(index, name)}
                        >
                          <img src={icon} alt={name} />
                          <span>{name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className='input-col'>
                <label>Քաղվածքի տեսակ</label>
                <select
                  value={input.fileType}
                  onChange={(e) =>
                    setInputs((prev) =>
                      prev.map((item, i) =>
                        i === index
                          ? { ...item, fileType: e.target.value }
                          : item
                      )
                    )
                  }
                >
                  <option value='PDF'>PDF</option>
                  <option value='Excel'>Excel</option>
                </select>
              </div>

              <div className='input-col'>
                <button
                  className={`upload-qaxvacq-btn ${
                    input.file ? 'upload-button-success' : ''
                  }`}
                >
                  <label htmlFor={`file-upload-${index}`}>
                    Վերբեռնել ֆայլը
                    <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id={`file-upload-${index}`}
                  style={{ display: 'none' }}
                  onChange={(e) =>
                    setInputs((prev) =>
                      prev.map((item, i) =>
                        i === index
                          ? { ...item, file: e.target.files[0] }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className='input-col'>
                {index !== 0 && (
                  <button
                    className='delete-row'
                    onClick={() => handleDeleteRow(index)}
                  >
                    Ջնջել
                  </button>
                )}
              </div>
            </div>
          ))}
          <button onClick={handleAddRow} className='add-row-button'>
            +
          </button>
        </div>

        <p className='error-message'>{error}</p>
        <button className='send-qaxvacs' onClick={handleSendData}>
          Ուղարկել
        </button>
      </div>

      <div style={{ padding: '20px' }}>
        <StepsProgressBar steps={steps} currentStep={currentStep} />
        <div className='steps-buttons'>
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Նախորդ
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
            disabled={currentStep === steps.length - 1}
          >
            Հաջորդ
          </button>
        </div>
      </div>
    </div>
  );
}
