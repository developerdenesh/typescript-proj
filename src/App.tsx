import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [dogs, setDogs] = useState("")
  const [message, setMessage] = useState(0)
  const [dogsArray, setdogsArray] = useState([""])


  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setDogs(data.message)
      })
  }

  return (
    <>
      <div className="App">
        <h1>Dogs</h1>
        <img src={dogs} />
      </div>
    </>
  )
}

export default App
