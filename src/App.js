import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';
// Functional 'side-effects' are triggered via useEffect hook

// Meaning of 'mount'- When the return() statement runs and renders the webpage. (probably!)

// Functional components in React run line by line, on contrary to class components
// that have the capability to run different function based snippets of code separately.

// If fetch() promise is called, it will create an infinite re-render
// since functional components run line by line completely from top to bottom.
// And in this particular case, data is fetched from a link which even tho it might not change,
// is treated as a dynamic changing source of data.
// Note- componentDidMount() is a class component function.

const App = () => {

  // console.log('render1');

  // React app re-renders every time searchField/monsters (1st argument of useState()) changes!
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [title, setTitle] = useState('');
  // const [a, b] = useState('');
  // const [c, d] = useState('');

  // console.log('render2');

  // First argument- Callback func; Second argument- Array
  // 1st argument contains the function that would run 'AFTER' the App function completely mounts once.
  // 2nd argument(dependency array) contains those functions/values that when changed, would indicate React to run
  // the 1st argument again.

  // console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return (monster.name.toLocaleLowerCase().includes(searchField));
    });
    setFilteredMonsters(newFilteredMonsters);
    // b(newFilteredMonsters);
    // d(newFilteredMonsters);
  },
    [monsters, searchField])

  // Both useEffect functions are getting called ONLY AFTER App function completely mounts once.
  // No of useEffect functions and their changes = No of App re-renderings.
  // 'effect2' doesn't get fired but 'insider' gets fired only coz monsters array is EMPTY initially (not exactly probably) coz...
  // ...monsters array is not empty since 1st useEffect does get run, it just doesn't get updated fast enough (probably).
  //[value<initial value set to '' empty string>, setValue<this is a function>]

  // const onTitleChange = (event) => {
  //   const titleFieldString = event.target.value.toLocaleLowerCase();
  //   setTitle(titleFieldString);
  // };

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className='monsters-search-box'
        placeholder='search monsters'
      />
      <br />
      {/* <SearchBox
        onChangeHandler={onTitleChange}
        className='set-title'
        placeholder='set title'
      /> */}
      <CardList monsters={filteredMonsters} />
    </div >
  );
}

export default App;