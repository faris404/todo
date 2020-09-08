import React, { useReducer } from 'react'
import './App.css'
import Home from './pages/Home'
import { reducer, init } from './data/reducer'
import { StateContext } from './data/context'
import Test from './components/Test'


function App() {

  const [state, dispatch] = useReducer(reducer, init)


  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Home />
        {/* <Test /> */}
      </div>
    </StateContext.Provider>
  )
}

export default App
