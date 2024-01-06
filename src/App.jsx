import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
     
    
    </>
  )
}

function Person() {
  const age = 25;
  const money = 36;
  const hoby = 'Playing Cricket is my hoby.'
  const person = {name: 'rayhan', age: 21}
  return(
    <h3>I am a {person.name} with age: {age + money} and {hoby}</h3>
  )
}

function Student() {
 return( <div className='student'>
  <h1>React World!</h1>
  <p>Name:</p>
  <p>Age:</p>
</div>)
}
function Developer() {
  return(
    <div>
      <h5>deve Developer</h5>
      <p>coding</p>
    </div>
  )
}

export default App
