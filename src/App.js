import React from 'react';
import SelectDataset from './components/table/SelectDataset';
import Popup from './components/Popup';
import Table from './components/table/Table';
import './App.css';
import Loader from "./components/table/Loader";

const App = () => {
  return (
    <div className='container'>
      <SelectDataset/>
      <Table/>
      <Loader />
      <Popup/>
    </div>
  );
}

export default App;
