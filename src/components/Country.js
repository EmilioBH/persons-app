import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
  const { flag, name } = country;
  return (
    <Link to={`/countries/${name}`}>
      <div className="card">
        <img src={flag} alt={name}/>
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
    
  )
}

export default Country;