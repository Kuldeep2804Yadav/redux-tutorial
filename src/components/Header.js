import React from 'react'
import { AuthActions } from '../Store/store'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch=useDispatch();
    const logOutHandler=()=>{
        dispatch(AuthActions.logout())
    }
  return (
    <div className=' h-14 bg-blue-600 text-white flex items-center justify-between px-2'>
        <h1 className='font-bold text-2xl p-2'> Redux Counter</h1>
        <button className='font-bold text-2xl p-2 h-4/5 w-max p-2 bg-red-600 border border-black' onClick={logOutHandler}>Logout</button>

    </div>
  )
}

export default Header