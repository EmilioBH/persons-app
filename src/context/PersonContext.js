import React, { createContext, useState } from 'react';

const PersonContext = createContext();

export const PersonProvider = ({children}) => {
  const [ name ] = useState('Roger');
  const [ company, setCompany ] = useState('Atmira');
  const [ hobbies, setHobbies ] = useState(['Futbol', 'Ciclismo'])
  
  return (
    <PersonContext.Provider value={{
      name,
      company,
      setCompany,
      hobbies,
      setHobbies
    }}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonContext;