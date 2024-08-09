import { createStore } from "redux"
const reducerfunction = (state={counter:0}, action)=>{
     switch (action.type) {
        case 'increment':
            return {...state, counter:state.counter + 1}
        case 'decrement':
            return {...state,counter:state.counter -1}    

        case 'incrementBy':
            return {...state, counter:state.counter + action.payload}
        case 'decrementBy':
            return {...state, counter:state.counter - action.payload}    
           
        default:
            return state;   
     }
}
let store= createStore(reducerfunction);
const counterSubscriber= ()=>{
    const latestState= store.getState();
    console.log(latestState)
}
store.subscribe(counterSubscriber)

export default store;

// store.dispatch({type:"increment" });
// store.dispatch({type:"decrement"})
// store.dispatch({type:"incrementBy" ,payload:2});
// store.dispatch({type:"decrementBy",payload:5})
