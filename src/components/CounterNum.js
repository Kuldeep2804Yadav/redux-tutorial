import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'

const CounterNum = () => {
    const counter = useSelector(state => state.counter);
    const dispatch=useDispatch();
    const increaseByfive=()=>{
        dispatch({ type: 'incrementBy', payload: 5 })
    }
    const decreaseByfive=()=>{
        dispatch({ type: 'decrementBy', payload: 5 })

    }
  return (
    <div>
      <h1 className=' h-24 w-1/2 m-auto bg-purple-950 text-white flex items-center justify-center font-bold text-3xl'>{counter}</h1>
      <div className='m-auto h-44 w-1/2 flex justify-between items-center'>
        <button onClick={increaseByfive} className=' h-16 w-32 bg-pink-400 text-white '>increased by 5</button>
        <button onClick={decreaseByfive} className=' h-16 w-32 bg-pink-400 text-white '>Decreased by 5</button>
      </div>
    </div>
  )
}

export default CounterNum;