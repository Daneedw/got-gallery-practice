import logo from './logo.svg';
import './App.css';
import CharacterGallery from './components/CharacterGallery';
import characters from "./data/characterData.json"
function App() {
  return (
    <div data-test="component-app">
     <CharacterGallery characters={characters}></CharacterGallery>
    </div>
  );
}

export default App;
