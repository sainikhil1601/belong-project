import React, { useState } from "react";
import './Popup.css';
import Modal from './Modal';
import Nav from "./Nav";
import Footer from "./footer";

function Courses() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <>
    <div>
      <Nav/>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Courses
      </button>
      
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      
    </div>

    </>
  );
}

export default Courses;