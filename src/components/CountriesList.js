import React, { useContext, useEffect, useState } from 'react';
import CountriesContext from '../context/CountriesContext';
import { serviceCountriesList } from '../services/serviceCountriesList';
import Country from './Country.js';

const CountriesList = () => {
  const europeCountries = useContext(CountriesContext)
  
  return (
    <div className="container">
      <div className="row">
        { europeCountries.map(country => (
          <div className="col-md-3 mt-5" key={country.name}>
            <Country country={country} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default CountriesList;