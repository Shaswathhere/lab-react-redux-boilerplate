import React, {useState} from 'react'
import {createStore} from 'redux'
import reducer from './Reducer.jsx'
import { decrementLike, incrementLike } from './Actions'

const store = createStore(reducer)

function LikeCounter() {
    const [count, setCount] = useState(0)

    const unsubscribe = store.subscribe(()=>{
        setCount(store.getState().count)
    })

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>store.dispatch(incrementLike())}>LIKE</button>
            <button onClick={()=>store.dispatch(decrementLike())}>DISLIKE</button>
        </>
    )
}
export default LikeCounter