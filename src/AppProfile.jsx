import logo from './logo.svg';
import './App.css';

function AppProfile() {
  const name = 'jeong';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>Hello! {name}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item)=>(
          <li>{item}</li>
        ))}
      </ul>
      <img style={{ width:'200px', height:'200px' }} 
      src='https://avatars.githubusercontent.com/u/97008461?v=4' 
      alt='nature'></img>
    </>
  );
}

export default AppProfile;
