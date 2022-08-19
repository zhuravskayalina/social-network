import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>I am header!</h1>
      
    </header>
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
