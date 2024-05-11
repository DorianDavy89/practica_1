import './App.css';
import Candidata from './components/Candidata'

function App() {
  return (
    <div className="contenedor-app">
      <h1 className='titulo-pagina'>Candidata a Reina de la Facultad Ciencias Matemáticas y Físicas</h1>
      <Candidata 
        imagen="Reina1"
        nombre="María Perez"
        edad="20"
        signo="Leo"
        hobby="Cantar, bailar y jugar tenis"
        frase="La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da con generosidad para servir"
      />
      <Candidata 
        imagen="Reina2"
        nombre="Andrea Jacome"
        edad="19"
        signo="Sagitario"
        hobby="Ir al gimmasio"
        frase="La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da con generosidad para servir"
      />
      <Candidata 
        imagen="Reina3"
        nombre="Vanessa Lopez"
        edad="21"
        signo="Virgo"
        hobby="Tocar el piano y leer"
        frase="La palabra tiene mucho de aritmética: divide cuando se utiliza como navaja, para lesionar; resta cuando se usa con ligereza para censurar; suma cuando se emplea para dialogar, y multiplica cuando se da con generosidad para servir"
      />
    </div>
  );
}

export default App;