import { Route, Routes } from 'react-router-dom'
import './App.css'
import PizzaDetalle from './views/PizzaDetalle'
import Home from './views/Home'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizzas/:id" element={<PizzaDetalle />} />
        <Route path="carrito/" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
