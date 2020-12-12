import React, {useState} from 'react';

const TableMenu = ({openForm, search}) => {
  const [text, setText] = useState('');

  const handleInputChange = event => {
    setText(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    search(text);
  }

  return (
    <div className='d-flex justify-content-between py-3 w-100'>
      <form
        className='input-group'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='form-control'
          placeholder='Поиск по таблице'
          value={text}
          onChange={handleInputChange}
        />
        <div className='input-group-append'>
          <button
            type='submit'
            className='btn btn-success'
          >
            Найти
          </button>
        </div>
      </form>
      <div className='d-flex flex-row-reverse w-100'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={openForm}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default TableMenu;