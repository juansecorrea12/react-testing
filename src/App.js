import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
      <Mensaje 
      color = 'red'
      message = 'Estamos en un curso de react' />
      <h1>Titulo de la web</h1>
    </div>
  );
}

export default App;
