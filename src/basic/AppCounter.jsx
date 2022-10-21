import React, {useState} from 'react'
import './basic/App.css';
import Counter from './components/Counter'

export default function AppCounter() {
    const [tots, setTots] = useState(0);
    const handelClick = () => setTots(prev => prev + 1);
  return (
    <div className='container'>
        <div className='banner'>
            Total Count: {tots} {tots > 10 ? 'burning' : 'spiderweb'}
        </div>
        <div className='counters'>
            <Counter total={tots} onClick={handelClick} />
            <Counter total={tots} onClick={handelClick} />
        </div>
    </div>
  )
}
