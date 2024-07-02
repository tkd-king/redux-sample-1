import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

const App= ()=>  {

  return (
    <Provider>
      <h1>Learn about redux toolkit</h1>
  <AddTodo/>
  <Todos/>

    </Provider>
  )
}

export default App;
