import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../redux/country/countrySlice';
import Details from './Details';
import '../../assets/detailsList.css';

function DetailsList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((store) => store.country.country);
  useEffect(() => {
    if (id) {
      dispatch(getCountry(id));
    }
  }, []);
  return (
    <>
      <div className="container-fluid bgd">
        {country?.map((country, index) => (
          <Details
            index={index}
            key={country.cca3}
            population={country.population}
            flags={country.flags}
            official={country.name.official}
            name={country.name.common}
            unMember={country.unMember ? 'Yes' : 'No'}
            currencies={country.currencies}
            independent={country.independent ? 'Yes' : 'No'}
            region={country.region}
            languages={country.languages}
            area={country.area}
          />
        ))}
      </div>
    </>
  );
}

export default DetailsList;
