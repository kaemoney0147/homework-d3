
import './App.css';
import WarningSign from './Component/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBadge from './Component/MyBadge';
import SingleBook from './Component/SingleBook';
import BookList from './Component/BookList';
import  fantasy from '../src/books/fantasy.json'
import FilterBookList from './Component/FilterBookList';


function App() {
  return (
    <div className="App">
      <WarningSign warning='This site is tricky'/>
      <MyBadge badge='Badge!' color="primary"/>
      <FilterBookList/>
      <SingleBook book={fantasy[0]}/>
      <BookList books={fantasy.slice(0,10)}/>
     
    </div>
  );
}

export default App;
