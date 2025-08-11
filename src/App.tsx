
import { useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {
  const [searchValue, setSearchValue] = useState<string>()

  console.log(searchValue);


  return (
    <>
    <Search submitSearch={setSearchValue} />
    </>
  )
}

export default App
