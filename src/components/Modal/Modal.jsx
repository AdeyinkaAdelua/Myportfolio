import React from 'react';
import './modal.css';
import { BiCheck } from 'react-icons/bi';

const Modal = ({ closeModal, experience }) => {
  const { title, company, duration, description } = experience;

  return (
    <article className="container modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modal-button__container'>
          <button className="modal-close__button" onClick={closeModal}>✖</button>
        </div>
        <div className="modal-title">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <h5>{duration}</h5>
        </div>
        <ul className="modal-description">
          {description.map((desc, i) => (
            <li key={i}>
              <BiCheck className='modal__description-icon' />
              <p>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Modal;
