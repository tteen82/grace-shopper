import React from 'react';

const LoginModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="model-header">
          <h4>MODAL TITLE</h4>
        </div>
        <div className="modal-body">MODAL CONTENT GOES HERE</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            {' '}
            CLoSe
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
