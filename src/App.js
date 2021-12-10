import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/Countries';

function App() {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
