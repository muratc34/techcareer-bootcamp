import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  );
}

export default App;
