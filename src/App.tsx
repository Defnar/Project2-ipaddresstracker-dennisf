
import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import InfoDisplay from './components/InfoDisplay';
import MapDisplay from './components/MapDisplay';
import useFetchData from './custom hooks/useFetchData';

function App() {
  const [searchValue, setSearchValue] = useState<string>()


useFetchData(true, "1.2.3.4");


  return (
    <>
    <Search submitSearch={setSearchValue} />
    <InfoDisplay />
    <MapDisplay />
    </>
  )
}

export default App
