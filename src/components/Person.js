import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import CountriesContext, { CountriesProvider } from '../context/CountriesContext';
import PersonContext from '../context/PersonContext';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';
import Hobbies from './Hobbies';
import NavBar from './Navbar';

const Person = () => {
  const { name, company, setCompany, hobbies, setHobbies } = useContext(PersonContext)  
  return (
    <div className="person-card">
      <h1>{name}</h1>
      <p>{company}</p>
      <button onClick={() => setCompany('Everis')}>Cambio de empresa</button>
      <NavBar />
      <Switch>
        <Route path="/hobbies">
          <Hobbies handleNewHobbies={(newHobbies) => setHobbies([...hobbies, newHobbies])}/>
        </Route>
        <Route exact path="/countries">
          <CountriesProvider>
            <CountriesList />
          </CountriesProvider>
        </Route>
        <Route path="/countries/:countryName">
          <CountryDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default Person;
