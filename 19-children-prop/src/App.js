import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return <div className="App">
    <Wrapper color="lightblue">
      <h2>Text inside</h2>
      <button>Click</button>
    </Wrapper>
    <Wrapper color="lightgreen">
      <h2>Another text</h2>
      <p>Paragraph</p>
      <input type="text" placeholder='write me smth' />
    </Wrapper>
  </div>; 
}

export default App;
