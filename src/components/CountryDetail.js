import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
 const { countryName } = useParams();
 
  return (
   <h1>Country: {countryName}</h1>
 ) 
}

export default CountryDetail;