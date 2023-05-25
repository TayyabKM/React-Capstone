import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../componenets/details/Details';

it('renders correctly', () => {
  const props = {
    population: 100000,
    area: 2000,
    flags: 'https://example.com/flag.png',
    official: 'Official Name',
    name: 'Country Name',
    unMember: 'Yes',
    languages: 'Language',
    currencies: 'Currency',
    independent: 'Yes',
    region: 'Region',
  };
  const tree = renderer
    .create(
      <Router>
        <Details
          population={props.population}
          area={props.area}
          flags={props.flags}
          official={props.official}
          name={props.name}
          unMember={props.unMember}
          languages={props.languages}
          currencies={props.currencies}
          independent={props.independent}
          region={props.region}
        />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
