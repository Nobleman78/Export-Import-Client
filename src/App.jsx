import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Service from './pages/Service'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Export from './ServicePages/Export'
import Import from './ServicePages/Import'
import NewProduct from './ServicePages/NewProduct'
import UsedProduct from './ServicePages/UsedProduct'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Service />}></Route>
        <Route path='/services/export' element={<Export />}></Route>
        <Route path='/services/import' element={<Import />}></Route>
        <Route path='/services/newProduct' element={<NewProduct />}></Route>
        <Route path='/services/usedProduct' element={<UsedProduct />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
