import React from 'react';

const singleCountry = (country) => {
  console.log(country.country.population.population);
  
  return (
    <div>
      <img
        src={country.country.flags.flags.png}
        alt={country.country.flags.flags.alt}
      />
      <h3>Name : {country.country.name.common} </h3>
      <p>Population : {country.country.population.population}</p>
    </div>
  );
};

export default singleCountry;