import React, { useContext } from 'react';
import PersonContext from '../context/PersonContext';
import useForm from '../hooks/useForm';
import { validateForm } from '../utils/validateForm.js';
import NewHobbies from './NewHobbies';

const AddHobbiesForm = () => {
  const { hobbies, setHobbies } = useContext(PersonContext);

  const handleHobbies = (newHobbie) => setHobbies([...hobbies, newHobbie])
  const { handleSubmit, handleChange, errors, values } = useForm(handleHobbies, validateForm)
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Añadir Hobbie:</h3>
        <input type="text" id="hobbies" name="name" value={values.name} onChange={handleChange}/>
        { errors.name && <p>Error</p> }
        <button onClick={handleSubmit}>Añadir</button>
      </form>
      <NewHobbies />
    </>
    
  )
}

export default AddHobbiesForm;