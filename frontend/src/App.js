import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './components/Search';
import Header from './components/header';


const App = () => {
  const [word, setWord] = useState('')
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(word)
  }
  return (
    <div>
        <Header title="Images Gallery 2"></Header>
        <Search word = {word} setWord={setWord} handleSubmit = {handleSearchSubmit}/>
    </div>
  );
}

export default App;
