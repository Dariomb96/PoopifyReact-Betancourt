import logo from './tapa16.jpg';
import navBar from './componentes/navBar/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
          <navBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testeito de reactsito
        </p>
        <a
          className="App-link"
          href="https://superamaia.files.wordpress.com/2010/09/fv.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          toma una galletita
        </a>
      </header>
    </div>
  );
}

export default App;
