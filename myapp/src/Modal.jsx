import React from 'react';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src="./workingman.jpeg" alt='/' />
        <div className='modalRight'>
          <h4 className='closeBtn' onClick={onClose}>
            X
          </h4>
          <div className='content'>
            <img src="./logo.png"/>
            <h4>Do you want a</h4>
            <h1>$20 OFFER</h1>
            <h4>for your first Course?</h4>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={onClose}>
              <span className='bold' >YES</span>
            </button>
            <button className='btnOutline' onClick={onClose}>
              <span className='bold' >NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;