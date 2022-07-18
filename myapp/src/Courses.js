import React, { useState } from "react";
import './Popup.css';
import Modal from './Modal';

function Courses() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <div>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Courses
      </button>
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

export default Courses;