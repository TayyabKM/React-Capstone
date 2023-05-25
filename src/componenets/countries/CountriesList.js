import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/country/countrySlice';
import Country from './Country';
import '../../assets/countriesList.css';
import search from '../../assets/images/search.png';

function CountiesList() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const countries = useSelector((store) => store.country.countries);
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, []);
  return (
    <>
      <div className="col m3 colorbg text-white text-center fs-4 fw-bold">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Filter By Country Name"
            style={{ borderRadius: '8px' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={search} alt="Search" style={{ width: '45px', paddingLeft: '10px' }} />
        </div>
        <h1 className="headingMain">
          World Countries Details
        </h1>
      </div>
      <div className="row">
        <div className="col p-1 px-5 m3 colorbg text-white">Countreis Names</div>
      </div>
      <div className="row">
        {countries
          .filter((country) => country.name.common
            .toLowerCase().includes(searchQuery.toLowerCase()))
          .map((country, index) => (
            <Country
              index={index}
              key={country.cca3}
              id={country.cca3}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
            />
          ))}
      </div>
    </>
  );
}

export default CountiesList;
