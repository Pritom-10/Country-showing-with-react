/* eslint-disable react-hooks/rules-of-hooks */
import React, { use } from 'react';
import SingleCountry from '../components/singleCountry';

const country = ({ countryPromise }) => {
 
  const countriesData = use(countryPromise);
  const countries = countriesData.countries
  
  
  return (
    <div>
      <h1>pritom barua shiro {countries.length}</h1>
      {
        countries.map(country => <SingleCountry country={country}></SingleCountry>)
      }
    </div>
  );
};

export default country;