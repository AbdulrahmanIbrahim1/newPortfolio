import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
