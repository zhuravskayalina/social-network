import logo from './logo.svg';
import './App.css';
import Header from './Header.js';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer />
    </div>
  );
}


const Item = () => {
  return (
    <li>
      hi
    </li>
  );
}

const Main = () => {
  return (
    <main className="main">
      <h1>I am main section!</h1>
      
    </main>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <h1>I am footer!</h1>
      
    </footer>
  );
}

export default App;
