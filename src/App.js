import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'jeong';
  return (
    <>
      <h1 className='orange'>Hello!</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
      <img style={{ width:'200px', height:'200px' }} 
      src='https://avatars.githubusercontent.com/u/97008461?v=4' 
      alt='nature'></img>
    </>
  );
}

export default App;
