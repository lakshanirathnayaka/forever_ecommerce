import React from 'react';
import '../style/DropDown.css';

const DropDown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className='dropdown-menu'>
      <div className='dropdown-content'>
        <p className='dropdown-item'>
          <i className="fas fa-user"></i> My Profile
        </p>
        <p className='dropdown-item'>
          <i className="fas fa-shopping-bag"></i> Orders
        </p>
        <p className='dropdown-item'>
          <i className="fas fa-sign-out-alt"></i> Logout
        </p>
      </div>
    </div>
  );
};

export default DropDown;