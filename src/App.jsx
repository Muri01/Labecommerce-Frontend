import { useState } from 'react'
// import './App.css'
import { Carrinho } from './components/Carrinho/Carrinho'
import { Filtros } from './components/Filtros/Filtros'
import { Home } from './components/Home/Home'
import { ContainerApp, GlobalStyle } from './GlobalStyle'

function App() {
  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([])

  return (
    <>
    <GlobalStyle/>
      <h1>Labecommerce</h1>
      <ContainerApp>
        <Filtros/>
        <Home produtos={produtos}/>
        <Carrinho/>
      </ContainerApp>
    </>
  )
}

export default App
