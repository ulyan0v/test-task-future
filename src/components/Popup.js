import React from 'react';
import {connect} from "react-redux";
import {hideMessage} from "../redux/reducers/globalReducer";

const Popup = ({type, text, isVisible, hide}) => {
  if (!isVisible) return null;

  return (
    <div className='d-flex fixed-top justify-content-center pt-4 popup'>
      <div className={`alert alert-dismissible alert-${type || 'danger'} shadow`} role='alert'>
        <button type='button' className='close' onClick={hide}>
          <span>&times;</span>
        </button>
        {text || 'Что-то пошло не так'}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isVisible: state.global.popup.isVisible,
    text: state.global.popup.text,
    type: state.global.popup.type
  };
}

const mapDispatchToProps = {
  hide: hideMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);