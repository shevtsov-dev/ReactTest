import './App.css';
import Info from './components/Info';
import styles from './components/Info.module.css';

function App() {
  return (
    <div className="App">
      <Info />
      <div className= {styles.info}>
        <h1>App component heading</h1>
        <button className="my-button">Random btn</button>
      </div>
    </div>
  );
}

export default App;
