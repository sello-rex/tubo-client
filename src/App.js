import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageInfo from './components/PageInfo';
import SearchBar from './components/Search';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-186355540-1');

function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);

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
