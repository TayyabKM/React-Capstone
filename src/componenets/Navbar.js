import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import back from '../assets/images/back.png';
import '../assets/navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isCountriesListPage = location.pathname === '/';

  const CountriesList = () => {
    navigate('/');
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light">
        <div>
          {isCountriesListPage ? (
            <span className="navbar-brand" style={{ color: 'white', paddingLeft: '8px' }}>&lt; 2023</span>
          ) : (
            <button type="button" onClick={CountriesList} className="back-btn">
              <img src={back} alt="back" />
            </button>
          )}
        </div>
        <div className="collapse navbar-collapse" style={{ display: 'block' }}>
          <ul className="navbar-nav mx-auto">
            {isCountriesListPage ? (
              <li className="nav-item active">
                <span className="nav-link">Countries</span>
              </li>
            ) : (
              <li className="nav-item active countryDetail">
                <span className="nav-link">Country Details</span>
              </li>
            )}

          </ul>
          <ul className="navbar-nav navbarIcons">
            <li className="nav-item ">
              <span className="nav-link white">
                <i className="fas fa-microphone" />

              </span>
            </li>
            <li className="nav-item navIcon">
              <span className="nav-link white">
                <i className="fas fa-cog" />
                {' '}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
