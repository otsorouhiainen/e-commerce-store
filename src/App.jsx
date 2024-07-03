import Home from '../pages/Home'
import Cart  from '../pages/Cart'
import Products from '../pages/Products'
import User from '../pages/User'
import NavbarComponent from '../components/NavbarComponent'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent/>
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="user" element={<User />} />
            </Routes>
        </Container>
      </BrowserRouter>
  </div>
  )
}
export default App
