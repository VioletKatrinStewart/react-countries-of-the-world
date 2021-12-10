import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/Countries';

function App() {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header>Countries of the World</header>
      {Countries.map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}

export default App;
