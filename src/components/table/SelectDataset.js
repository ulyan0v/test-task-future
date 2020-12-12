import React from 'react';
import {connect} from "react-redux";
import {getBigData, getSmallData} from "../../redux/reducers/tableReducer";

const SelectDataset = ({getSmallData, getBigData}) => {
  return (
    <div className='row py-2'>
      <button
        type='button'
        className='btn btn-outline-primary mr-3'
        onClick={getSmallData}
      >
        Загрузить маленький набор данных
      </button>
      <button
        type='button'
        className='btn btn-outline-primary'
        onClick={getBigData}
      >
        Загрузить большой набор данных
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  getSmallData,
  getBigData
};

export default connect(null, mapDispatchToProps)(SelectDataset);