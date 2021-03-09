import React, { useState } from 'react';
import AddHobbiesForm from './AddHobbiesForm';

const Hobbies = ({handleNewHobbies}) => {

  const [newHobbies] = useState(['Waterpolo'] )

  return (
    <>
      <h3>Container watterpolo: </h3>
      <button onClick={() => handleNewHobbies(newHobbies)}>Añadir waterpolo</button>
      <AddHobbiesForm />
    </>
  )
}

export default Hobbies;