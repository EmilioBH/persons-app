import React, {createContext, useEffect, useState} from 'react';
import { serviceCountriesList } from '../services/serviceCountriesList';

const CountriesContext = createContext();

export const CountriesProvider = ({children}) => {
  const [ europeCountries, setEuropeCountries ] = useState([]);

  useEffect(() => {
    serviceCountriesList().then(europeCountries => setEuropeCountries(europeCountries))
  }, [])

  return (
    <CountriesContext.Provider value ={europeCountries}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContext;