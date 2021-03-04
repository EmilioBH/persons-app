import React, { useState } from 'react';
import AddHobbiesForm from './AddHobbiesForm';

const Hobbies = ({hobbies, handleNewHobbies}) => {

  const [newHobbies, setNewHobbies] = useState(['Basquet', 'Waterpolo'] )

  return (
    <>
      <h3>Hobbies: </h3>
      <ul>
        {
          hobbies.map(hobbie => <li key={`key-${hobbie}`}>{hobbie}</li>)
        }
      </ul>
      <button onClick={() => handleNewHobbies(newHobbies)}>Cambio de Hobbies</button>
      <AddHobbiesForm handleHobbies={handleNewHobbies} />
    </>
  )
}

export default Hobbies;