import React from 'react'
import { useReducer } from 'react'

const initialValue = {age:0}

function Reducer(state,action) {
    switch (action.type) {
        case 'INCREMENT':
            return {age:state.age + 1};
        case 'DECREMENT':
            return {age:state.age - 1};
        default:
            return state;
    }
}

function UseReducer(props) {
    const [state,dispatch] = useReducer(Reducer,initialValue)
  return (
    <div className='container mt-5'>
      <button className='btn btn-danger' onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
      <h1>{state.age}</h1>
      <button className='btn btn-success' onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
    </div>
  )
}

export default UseReducer;
