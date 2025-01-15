import React, { useState, useEffect } from 'react';
import './style.css';

import StepsProgressBar from '../StepsProgressBar';

import UserInfo from '../UserInfo';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SecondStep() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');

  const [passportType, setPassportType] = useState('Կապույտ անձնագիր');
  const [passportNumber, setPassportNumber] = useState(null);

  const [bluePassport, setBluePassport] = useState(null);
  const [socialCard, setSocialCard] = useState(null);
  const [IDCardFirstPage, setIDCardFirstPage] = useState(null);
  const [IDCardSecondPage, setIDCardSecondPage] = useState(null);
  const [livingCard, setLivingCard] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  useEffect(() => {
    document.title = 'Second Step';
  }, []);

  const handleFileUpload = (e, filename) => {
    const file = e.target.files[0];
    const maxSizeInMB = 15;
    if (file) {
      const validFormats = [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
      ];
      const fileSizeInMB = file.size / (1024 * 1024);

      if (!validFormats.includes(file.type)) {
        alert('Խնդրում ենք վերբեռնել միայն PDF կամ նկար ֆորմատով ֆայլեր:');
        e.target.value = '';
      } else if (fileSizeInMB > maxSizeInMB) {
        alert(
          `Խնդրում ենք վերբեռնել ֆայլ, որը չի գերազանցում ${maxSizeInMB} ՄԲ-ը`
        );
        e.target.value = '';
      } else {
        switch (filename) {
          case 'file1':
            setBluePassport(file);
            break;
          case 'file2':
            setSocialCard(file);
            break;
          case 'file3':
            setIDCardFirstPage(file);
            break;
          case 'file4':
            setIDCardSecondPage(file);
            break;
          case 'file5':
            setLivingCard(file);
            break;
          case 'file6':
            setSocialCard(file);
            break;
          default:
            break;
        }
      }
    }
  };

  const handleSendData = () => {
    setErrorMessage(null);
    let data = {
      name: name,
      passport_type: passportType,
      passport_number: passportNumber,
      blue_passport: bluePassport,
      social_card: socialCard,
      id_first_page: IDCardFirstPage,
      id_second_page: IDCardSecondPage,
      living_card: livingCard,
    };

    if (!data.name || !data.passport_type || !data.passport_number) {
      setErrorMessage('Բոլոր դաշտերը պարտադիր են');
      return;
    }

    switch (data.passport_type) {
      case 'Կապույտ անձնագիր':
        if (!data.blue_passport || !data.social_card) {
          setErrorMessage('Բոլոր դաշտերը պարտադիր են');
          return;
        }
        break;
      case 'Նույանկանացման քարտ':
        if (!data.id_first_page || !data.id_second_page) {
          setErrorMessage('Բոլոր դաշտերը պարտադիր են');
        }
        break;
      case 'Կացության քարտ':
        if (!data.living_card || !data.social_card) {
          setErrorMessage('Բոլոր դաշտերը պարտադիր են');
          return;
        }
        break;
      default:
        break;
    }

    console.log(data);
  };

  return (
    <div className='first-step second-step'>
      <UserInfo />

      <div className='add-info-section'>
        <h2>Ավելացրեք անձնական տվյալները</h2>
        <DotLottieReact
          src='https://lottie.host/4e69a838-5686-4d11-94f4-c12c45701f7e/7vfBMfLIU4.lottie'
          loop
          autoplay
          className='lottie-passport'
        />
        <div>
          <div className='add-info-input-section'>
            <label htmlFor='name'>Անուն Ազգանուն Հայրանուն</label>
            <input
              type='text'
              name='passport-name'
              id='passport-name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='add-info-input-section'>
            <label htmlFor='passport-type'>Անձնագրի տեսակ</label>
            <select
              name='passport-type'
              id='passport-type'
              onChange={(e) => {
                setPassportType(e.target.value);
                setPassportNumber(null);
                setErrorMessage(null);
              }}
            >
              <option value='Կապուտ անձնագիր'>Կապուտ անձնագիր</option>
              <option value='Նույանկանացման քարտ'>Նույանկանացման քարտ</option>
              <option value='Կացության քարտ'>Կացության քարտ</option>
            </select>
          </div>
          <div className='add-info-input-section'>
            {passportType === 'Կապույտ անձնագիր' ? (
              <>
                <label htmlFor='passport-number'>Անձնագրի համար</label>
                <input
                  type='text'
                  name='passport-number'
                  id='passport-number'
                  onChange={(e) => setPassportNumber(e.target.value)}
                />
              </>
            ) : passportType === 'Նույանկանացման քարտ' ? (
              <>
                <label htmlFor='id-card-number'>
                  Նույանկանացման քարտի համար
                </label>
                <input
                  type='text'
                  name='id-card-number'
                  id='id-card-number'
                  onChange={(e) => setPassportNumber(e.target.value)}
                />
              </>
            ) : (
              <>
                <label htmlFor='living-card-number'>
                  Կացության քարտի համար
                </label>
                <input
                  type='text'
                  name='living-card-number'
                  id='living-card-number'
                  onChange={(e) => setPassportNumber(e.target.value)}
                />
              </>
            )}
          </div>
        </div>
        <div className='passport-upload-section'>
          {passportType === 'Կապույտ անձնագիր' ? (
            <>
              <div>
                <button className={bluePassport ? 'upload-button-success' : ''}>
                  <label htmlFor='file-upload-1'>
                    Վերբեռնել անձնագրի 2-րդ և 3-րդ էջերը միասին
                    <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id='file-upload-1'
                  style={{ display: 'none' }}
                  accept='.pdf, .jpg, .png, .jpeg, .webp'
                  onChange={(e) => handleFileUpload(e, 'file1')}
                />
              </div>
              <div>
                <button className={socialCard ? 'upload-button-success' : ''}>
                  <label htmlFor='file-upload-2'>
                    Վերբեռնել սոց․ քարտը <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id='file-upload-2'
                  style={{ display: 'none' }}
                  accept='.pdf, .jpg, .png, .jpeg, .webp'
                  onChange={(e) => handleFileUpload(e, 'file2')}
                />
              </div>
            </>
          ) : passportType === 'Նույանկանացման քարտ' ? (
            <>
              <div>
                <button
                  className={IDCardFirstPage ? 'upload-button-success' : ''}
                >
                  <label htmlFor='file-upload-3'>
                    Վերբեռնել ID քարտի առաջին էջը
                    <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id='file-upload-3'
                  style={{ display: 'none' }}
                  accept='.pdf, .jpg, .png, .jpeg, .webp'
                  onChange={(e) => handleFileUpload(e, 'file3')}
                />
              </div>
              <div>
                <button
                  className={IDCardSecondPage ? 'upload-button-success' : ''}
                >
                  <label htmlFor='file-upload-4'>
                    Վերբեռնել ID քարտի երկրորդ էջը
                    <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id='file-upload-4'
                  style={{ display: 'none' }}
                  accept='.pdf, .jpg, .png, .jpeg, .webp'
                  onChange={(e) => handleFileUpload(e, 'file4')}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <button className={livingCard ? 'upload-button-success' : ''}>
                  <label htmlFor='file-upload-5'>
                    Վերբեռնել կացության քարտը
                    <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id='file-upload-5'
                  style={{ display: 'none' }}
                  accept='.pdf, .jpg, .png, .jpeg, .webp'
                  onChange={(e) => handleFileUpload(e, 'file5')}
                />
              </div>
              <div>
                <button className={socialCard ? 'upload-button-success' : ''}>
                  <label htmlFor='file-upload-6'>
                    Վերբեռնել սոց․ քարտը
                    <i className='fa fa-upload'></i>
                  </label>
                </button>
                <input
                  type='file'
                  id='file-upload-6'
                  style={{ display: 'none' }}
                  accept='.pdf, .jpg, .png, .jpeg, .webp'
                  onChange={(e) => handleFileUpload(e, 'file6')}
                />
              </div>
            </>
          )}
        </div>
        <p className='error-message'>{errorMessage}</p>
        <button className='send-personal-data-btn' onClick={handleSendData}>
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
