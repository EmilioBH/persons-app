import React from 'react';
import useForm from './hooks/useForm';
import { validateForm } from './utils/validateForm.js';

const AddHobbiesForm = ({handleHobbies}) => {
  
  const { handleSubmit, handleChange, errors, values } = useForm(handleHobbies, validateForm)
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Añadir Hobbie:</h3>
      <input type="text" id="hobbies" name="name" value={values.name} onChange={handleChange}/>
      { errors.name && <p>Error</p> }
      <button onClick={handleSubmit}>Añadir</button>
    </form>
  )
}

export default AddHobbiesForm;