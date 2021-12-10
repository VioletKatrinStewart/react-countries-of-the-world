import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/Countries';

function App() {
  const [Countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [Continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    const filteredCountries = Countries.filter((country) => country.name.includes(query));
    console.log(filterCountries);
    const filteredByContinents = filteredCountries.filter(
      (country) => country.continent === Continent || Continent === 'All'
    );
    console.log(filteredByContinents);
    return filteredByContinents;
  }

  return (
    <div className="App">
      <input
        className="input"
        placeholder="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={Continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="North America">Norh America</option>
        <option value="South America">South America</option>
      </select>

      <header>Countries of the World</header>
      {filterCountries().map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}

export default App;
