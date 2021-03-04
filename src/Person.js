import React, { useEffect, useState } from 'react';
import Hobbies from './Hobbies';

const Person = () => {
  const [name, setName] = useState('Roger')
  const [company, setCompany] = useState('Atmira')

  const [person, setPerson] = useState({
    name: 'Roger',
    company: 'Atmira'
  })

  const [hobbies, setHobbies] = useState(['Futbol', 'Ciclismo'])
  const [isHobbiesVisible, setIsHobbiesVisible] = useState(false)

  useEffect(() => console.log('RENDERIZADO'), [])

  useEffect(() => console.log('UPDATE'), [company])
  
  // handleCompany = () => this.setState({company: 'Everis'})
  // componentDidMount = () => console.log('COMPONENTE PERSON RENDERIZADO')
  // componentDidUpdate = () => console.log(this.state.isHobbiesVisible)
  // const handleHobbies = (hobbies) => {}
  // addNewHobbies = () => this.setState({hobbies: [...this.state.hobbies, this.state.newHobbie]})
  
  return (
    <div className="person-card">
      <h1>{person.name}</h1>
      <p>{person.company}</p>
      <button onClick={() => setPerson({...person, company: 'Everis'})}>Cambio de empresa</button>
      <button onClick={() => setIsHobbiesVisible(!isHobbiesVisible)}>Ver Hobbies de {name}</button>
      {
        isHobbiesVisible && <Hobbies hobbies={hobbies} handleNewHobbies={(newHobbies) => setHobbies([...hobbies, newHobbies])}/>
      }
    </div>
  )
}

export default Person;
