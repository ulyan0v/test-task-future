import React from 'react';

const ModalWindow = ({title, children, isOpen, hide}) => {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              {title}
            </h5>
            {hide && (
              <button
                type='button'
                className='close'
                onClick={hide}
              >
                <span>&times;</span>
              </button>
            )}
          </div>
          <div className='modal-body'>
            {children}
          </div>
          {/*<div className='modal-footer'>*/}
          {/*  <button type='button' className='btn btn-secondary'>Close</button>*/}
          {/*  <button type='button' className='btn btn-primary'>Save changes</button>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;