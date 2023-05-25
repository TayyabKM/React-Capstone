import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Country from '../componenets/countries/Country';

it('renders correctly', () => {
  const country = {
    id: '1',
    name: 'Test Country',
    capital: 'Test Capital',
    population: 1000000,
  };
  const tree = renderer
    .create(
      <Router>
        <Country
          id={country.id}
          name={country.name}
          capital={country.capital}
          population={country.population}
        />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
