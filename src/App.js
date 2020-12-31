import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageInfo from './components/PageInfo';
import SearchBar from './components/Search';

function App() {
  return (
    <div className="container-lg">
      <Navbar />
      <SearchBar />
      <PageInfo />
      <Footer />
    </div>
  );
}

export default App;
