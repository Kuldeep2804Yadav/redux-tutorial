import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterActions } from '../Store/store';

const CounterNum = () => {
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    const increaseByFive = () => {
        dispatch(CounterActions.increaseBy(5));
    };

    const decreaseByFive = () => {
        dispatch(CounterActions.decreaseBy(5));
    };

    return (
        <div className="flex flex-col items-center mt-16 space-y-8">
            <h1 className="text-4xl w-1/4  text-center font-extrabold bg-purple-950 text-white py-4 px-8 rounded-lg shadow-lg">
                {counter}
            </h1>
            <div className="flex item-center justify-between w-1/4">
                <button 
                    onClick={increaseByFive} 
                    className="h-16 w-36 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
                >
                    Increase by 5
                </button>
                <button 
                    onClick={decreaseByFive} 
                    className="h-16 w-36 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
                >
                    Decrease by 5
                </button>
            </div>
        </div>
    );
};

export default CounterNum;
