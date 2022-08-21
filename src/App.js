import logo from './logo.svg';
import './App.css';



const App = () => {
  return (
    <div className = 'app-wrapper'>
     <header className='header'>
        <img className="logo-img" src="https://img.freepik.com/free-vector/cute-alien-hug-ufo-toy-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated_138676-5307.jpg?w=1060&t=st=1661092476~exp=1661093076~hmac=66a37d8e62c3473f28578ccd61f121ec9465920412bbc1b67dc092f6d8a37828" alt="logo - alien" title="alien logo"></img>
     </header>
     <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
        <div>Profile</div>
     </nav>
     <main className='main'>
      main content 
     </main>

    </div>
  );
};

export default App;

