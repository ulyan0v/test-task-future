import React, {useState} from 'react';
import ModalWindow from "../ModalWindow";

const AddUserForm = ({addData, formIsOpen, hideForm}) => {
  const [formFields, setFormFields] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = event => {
    const {name, value} = event.target;

    setFormFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();

    addData(formFields);
    hideForm();
  }

  const isValid = Object.keys(formFields).every(key => formFields[key]);

  return (
    <ModalWindow
      title='Новая запись'
      isOpen={formIsOpen}
      hide={hideForm}
    >
      <form
        className='d-flex flex-column'
        onSubmit={handleSubmit}
      >
        <FormField
          title='Id'
          type='number'
          name='id'
          value={formFields.id}
          onChange={handleChange}
        />
        <FormField
          title='First Name'
          type='text'
          name='firstName'
          value={formFields.firstName}
          onChange={handleChange}
        />
        <FormField
          title='Last Name'
          type='text'
          name='lastName'
          value={formFields.lastName}
          onChange={handleChange}
        />
        <FormField
          title='Email'
          type='text'
          name='email'
          value={formFields.email}
          onChange={handleChange}
        />
        <FormField
          title='Phone'
          type='text'
          name='phone'
          value={formFields.phone}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='btn btn-primary'
          disabled={!isValid}
        >
          Добавить
        </button>
      </form>
    </ModalWindow>
  );
}

const FormField = ({title, type, name, value, onChange}) => {
  return (
    <div className='form-group'>
      <label className='w-100'>
        {title}
        <input
          type={type}
          name={name}
          className='form-control'
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default AddUserForm;