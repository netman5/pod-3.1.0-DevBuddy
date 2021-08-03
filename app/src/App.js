import './App.css';
import Home from './screens/Home';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='App'>
      <SearchBar />
      <Home />
    </div>
  );
};

export default App;
