
import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import InfoDisplay from './components/InfoDisplay';
import MapDisplay from './components/MapDisplay';

function App() {
  const [searchValue, setSearchValue] = useState<string>()

  console.log(searchValue);


  return (
    <>
    <Search submitSearch={setSearchValue} />
    <InfoDisplay />
    <MapDisplay />
    </>
  )
}

export default App
