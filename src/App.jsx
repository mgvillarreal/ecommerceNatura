import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [valor, setValor] = useState(0);

  return (
    <>
    <NavBar valor={valor}/>

    <ItemListContainer mensaje="un mensaje" fn={setValor}/>
    </>
  )
}

export default App
