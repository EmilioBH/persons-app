import React, { useContext } from 'react';
import PersonContext from '../context/PersonContext';

const NewHobbies = () => {
  const { hobbies } = useContext(PersonContext)
  return (
    <>
      <h1>New hobbies:</h1>
      <ul>
        {
          hobbies.map(hobbie => <li key={`key-${hobbie}`}>{hobbie}</li>)
        }
      </ul>
    </>
  )
}

export default NewHobbies;