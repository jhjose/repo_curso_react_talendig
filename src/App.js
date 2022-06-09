import logo from './logo.svg';
import './App.css';

function App() {
  let title_app = 'Curso Intensivo de React - Talendig';
  let description = "Esta es un sitio dedicado al aprendizaje de los estudiantes de Talendig.";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title_app}
        </a>
        <p>{description}</p>
      </header>
    </div>
  );
}

export default App;
