import Todo from './components/Todo'
import './App.css';

function App() {
  const list = [
    'typescript + react',
    'react + redux',
    'react + redux + saga',
    'react + redux + saga + typescript',
    'react + redux + saga + typescript + react-router',

  ]
  return (
    <div>
      <h1>typescript yeay</h1>
      <Todo listing={list}/>
    </div>
  );
}

export default App;
