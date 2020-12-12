import React from 'react';
import {connect} from "react-redux";
import {changeSort} from "../../redux/reducers/tableReducer";

const TableHead = ({sortParams, changeSort}) => {
  const handleFilterSelection = event => {
    changeSort(event.target.name);
  }

  return (
    <thead>
    <tr>
      <Th name='id' text='ID' sortParams={sortParams} onClick={handleFilterSelection}/>
      <Th name='firstName' text='First Name' sortParams={sortParams} onClick={handleFilterSelection}/>
      <Th name='lastName' text='Last Name' sortParams={sortParams} onClick={handleFilterSelection}/>
      <Th name='email' text='Email' sortParams={sortParams} onClick={handleFilterSelection}/>
      <Th name='phone' text='Phone' sortParams={sortParams} onClick={handleFilterSelection}/>
    </tr>
    </thead>
  );
}

const Th = ({name, text, onClick, sortParams}) => {
  return (
    <th className='p-0'>
      <button
        name={name}
        className='btn w-100 h-100 d-flex justify-content-between'
        onClick={onClick}
      >
        <span>{text}</span>
        {name === sortParams.by && (
          <span className={`animate ${sortParams.isDescendingOrder && 'flip'}`}>
            &#8679;
          </span>
        )}
      </button>
    </th>
  );
}

const mapStateToProps = state => {
  return {
    sortParams: state.table.sortParams
  };
}

const mapDispatchToProps = {
  changeSort
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHead);