import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi!! I am Yamin,, I am React Developer</p>
        <Person name="Munna" jobs="Students"></Person>
        <Person name="Chunna" jobs="Director"></Person>
      </header>
    </div>
  );
}
function Person(props){
  return(
    <div>
      <h2>My name : {props.name}</h2>
      <h2>My profession : {props.jobs}</h2>
    </div>
  )
}

export default App;
