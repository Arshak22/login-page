import React, { useState, useEffect } from 'react';
import './style.css';

import StepsProgressBar from '../StepsProgressBar';

import UserInfo from '../UserInfo';

export default function FirstStep() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  useEffect(() => {
    document.title = 'Step One';
  }, []);

  return (
    <div className='first-step'>
      <UserInfo />

      <div className='promocode-section'>
        <input
          type='text'
          className='promocode-input'
          placeholder='Տեղադրեք ձեր պրոմոկոդն այստեղ'
        />
        <button className='promocode-button'>Ակտիվացնել</button>
      </div>

      <div id='generic_price_table'>
        <h1>Մեր փաթեթները</h1>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='generic_content clearfix'>
                  <div className='generic_head_price clearfix'>
                    <div className='generic_head_content clearfix'>
                      <div className='head_bg'></div>
                      <div className='head'>
                        <span>Start</span>
                      </div>
                    </div>

                    <div className='generic_price_tag clearfix'>
                      <span className='price'>
                        <span className='sign'>Սկսած</span>
                        <span className='currency'>10.000 ֏</span>
                        <span className='sign'>-ից</span>
                      </span>
                    </div>
                  </div>

                  <div className='generic_feature_list'>
                    <ul>
                      <li>Հայտարարագրի կազմում և ներկայացում</li>
                      <li>Ստորագրման գործընթացի ուղղորդում</li>
                      <li>ՀՎՀՀ ստանալու քայլերի մանրամասն ներկայացում</li>
                    </ul>
                  </div>

                  <div className='generic_price_btn clearfix first-sign-up-btn'>
                    <a className='' href=''>
                      Գրանցվել Հիմա
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='generic_content clearfix'>
                  <div className='generic_head_price clearfix'>
                    <div className='generic_head_content clearfix'>
                      <div className='head_bg'></div>
                      <div className='head'>
                        <span>Plus</span>
                      </div>
                    </div>

                    <div className='generic_price_tag clearfix'>
                      <span className='price'>
                        <span className='sign'>Սկսած</span>
                        <span className='currency'>20.000 ֏</span>
                        <span className='sign'>-ից</span>
                      </span>
                    </div>
                  </div>

                  <div className='generic_feature_list'>
                    <ul>
                      <li>Հայտարարագրի կազմում և ներկայացում</li>
                      <li>Ստորագրման գործընթացի ուղղորդում</li>
                      <li>Աջակցույթուն ՀՎՀՀ ստանալուց</li>
                    </ul>
                  </div>

                  <div className='generic_price_btn clearfix second-sign-up-btn'>
                    <a className='' href=''>
                      Գրանցվել Հիմա
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='generic_content clearfix'>
                  <div className='generic_head_price clearfix'>
                    <div className='generic_head_content clearfix'>
                      <div className='head_bg'></div>
                      <div className='head'>
                        <span>Premium</span>
                      </div>
                    </div>

                    <div className='generic_price_tag clearfix'>
                      <span className='price'>
                        <span className='sign'>Սկսած</span>
                        <span className='currency'>40.000 ֏</span>
                        <span className='sign'>-ից</span>
                      </span>
                    </div>
                  </div>

                  <div className='generic_feature_list'>
                    <ul>
                      <li>Հայտարարագրի կազմում և ներկայացում</li>
                      <li>Ստորագրման գործընթացի ուղղորդում</li>
                      <li>Ստորագրության ստանալու աջակցում</li>
                      <li>Աջակցույթուն ՀՎՀՀ ստանալուց</li>
                      <li>Քաղվածքների մշակված հաշվետվություն</li>
                    </ul>
                  </div>

                  <div className='generic_price_btn clearfix third-sign-up-btn'>
                    <a className='' href=''>
                      Գրանցվել Հիմա
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
