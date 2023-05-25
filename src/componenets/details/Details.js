import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/details.css';

function Details(props) {
  const {
    population,
    name,
    flags,
    official,
    unMember,
    languages,
    currencies,
    independent,
    region,
    area,
  } = props;
  return (
    <>
      <div className="row" style={{ margin: 'auto' }}>
        <div className="container text-white" style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '20px', padding: '20px' }}>{name}</h1>
          <img src={flags} alt="Country flag" style={{ marginLeft: 'auto', padding: '20px' }} />
        </div>
      </div>
      <table className="table table-striped text-white">
        <tbody>
          <tr>
            <td>Official Name</td>
            <td>{official}</td>
          </tr>
          <tr>
            <td>Region</td>
            <td>{region}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{population}</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{languages}</td>
          </tr>
          <tr>
            <td>United Nations Member</td>
            <td>{unMember}</td>
          </tr>
          <tr>
            <td>Currencies</td>
            <td>{currencies}</td>
          </tr>
          <tr>
            <td>Independent</td>
            <td>{independent || 'N/A'}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area}
              <span>  Square Kilometer</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

Details.propTypes = {
  population: PropTypes.number.isRequired,
  area: PropTypes.number.isRequired,
  flags: PropTypes.string.isRequired,
  official: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unMember: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  independent: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default Details;
