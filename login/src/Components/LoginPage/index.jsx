import React, { useState, useEffect } from 'react';
import './style.css';

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [username, setUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [signUpError, setSignUpError] = useState('');

  useEffect(() => {
    document.title = 'Sign In';
  }, []);

  const handleSwitch = (section) => {
    setLoginError('');
    setSignUpError('');
    setIsSignIn(section === 'sign-in');
  };

  const handleSignIn = () => {
    setLoginError('');

    if (!loginEmail || !loginPassword) {
      setLoginError('Խնդրում ենք լրացնել բոլոր դաշտերը');
    } else {
      let data = {
        email: loginEmail,
        password: loginPassword,
      };
      console.log(data);
    }
  };

  const handleSignUp = () => {
    setSignUpError('');

    if (!signUpEmail || !signUpPassword || !username) {
      setSignUpError('Խնդրում ենք լրացնել բոլոր դաշտերը');
    } else {
      let data = {
        email: signUpEmail,
        password: signUpPassword,
        username: username,
      };
      console.log(data);
    }
  };

  return (
    <div className='login-page'>
      <div className={'form-section' + (!isSignIn ? ' sign-up-form-section' : '')}>
        <div id='form-switch-section'>
          <h1
            className={isSignIn ? 'active-switch' : ''}
            onClick={() => handleSwitch('sign-in')}
          >
            Մուտք Գործել
          </h1>
          <h1
            className={!isSignIn ? 'active-switch' : ''}
            onClick={() => handleSwitch('sign-up')}
          >
            Ստեղծել հաշիվ
          </h1>
        </div>
        <div
          id='sign-in-section'
          style={{ display: isSignIn ? 'block' : 'none' }}
        >
          <div>
            <label htmlFor='login-email'>Էլ․ հասցե</label>
            <input
              type='email'
              name='login-email'
              id='login-email'
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='login-password'>Գաղտնաբառ</label>
            <input
              type='password'
              name='login-password'
              id='login-password'
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          {loginError && <div className='error-message'>{loginError}</div>}
          <button onClick={handleSignIn} className='form-btn'>
            Մուտք Գործել
          </button>
        </div>
        <div
          id='sign-up-section'
          style={{ display: isSignIn ? 'none' : 'block' }}
        >
          <div>
            <label htmlFor='sign-up-email'>Էլ․ հասցե</label>
            <input
              type='email'
              name='sign-up-email'
              id='sign-up-email'
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='username'>Օգտատիրոջ անուն</label>
            <input
              type='name'
              name='username'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='sign-up-password'>Գաղտնաբառ</label>
            <input
              type='password'
              name='sign-up-password'
              id='sign-up-password'
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
          </div>
          {signUpError && <div className='error-message'>{signUpError}</div>}
          <button onClick={handleSignUp} className='form-btn'>
            Ստեղծել Հաշիվ
          </button>
        </div>
      </div>
    </div>
  );
}
