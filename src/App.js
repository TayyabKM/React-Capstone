import { Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import './App.css';
import CountiesList from './componenets/countries/CountriesList';
import DetailsList from './componenets/details/DetailsList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountiesList />} />
        <Route path="/detail-list/:id" element={<DetailsList />} />
      </Routes>
    </>
  );
}

export default App;
