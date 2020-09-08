import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../data/context'
import { FETCH_TEST } from '../data/actions'


function Test() {
    let golbel = useContext(StateContext)
    // let {state,dispatch} = golbel
    const [data, setData] = useState([])
    
    useEffect(() => {
        function fetch(){
            golbel.dispatch({ type: FETCH_TEST })
            // setData([...data, ...golbel.state.test])
            // console.log(golbel.state);
        }
        fetch()
    }, [])

    // console.log(data)
    console.log(golbel)
    return (
        <div>
            <h1>Test</h1>
            
        </div>
    )
}

export default Test
