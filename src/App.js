import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/Countries';

function App() {
  const [Countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
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
    return filteredCountries;
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
      <header>Countries of the World</header>
      {filterCountries().map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}

export default App;
