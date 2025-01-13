import React from "react";
import './style.css';

export default function UserInfo() {
  return (
    <div className='user-info'>
      <ul className='user-info-list'>
        <li className='user-info-item'>
          <i className='fa fa-user'></i> Անուն Ազգանուն
        </li>
        <li className='user-info-item'>
          <i className='fa fa-sign-out'></i> Դուրս Գալ
        </li>
      </ul>
    </div>
  );
}
