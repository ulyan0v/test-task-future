import React from 'react';
import {connect} from "react-redux";
import logo from '../../logo.svg';

const Loader = ({isLoading}) => {
  if (!isLoading) return null;

  return (
    <div className='modal d-flex justify-content-center align-items-center'>
      <img className='App-logo' src={logo} alt=''/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.global.isLoading
  };
}

export default connect(mapStateToProps)(Loader);