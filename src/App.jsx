import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Registration from './pages/Registration';
import DelayedFallback from './Utility/DelayedFallback';
import CallButton from './Utility/Call';
import GoToTop from './Utility/GoToTop';
import TalkToUs from './Utility/TalkToUs';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Service = lazy(() => import('./pages/Service'));
const Product = lazy(() => import('./pages/Product/Product'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./ServicePages/Blogs_News/Blogs'))
const ServiceDetail = lazy(() => import('./ServicePages/ServiceDetail/ServiceDetail'))
const Export = lazy(() => import('./ServicePages/Export'));
const Import = lazy(() => import('./ServicePages/Import'));
const NewProduct = lazy(() => import('./ServicePages/NewProduct/NewProduct'));
const UsedProduct = lazy(() => import('./ServicePages/UsedProduct/UsedProduct'));
const ExportServiceRequest = lazy(() => import('./ServicePages/ServiceRequest/ServiceRequest'))

function App() {
  return (
    <div>
      <Navbar />
      {/* Suspense boundary to show a loading fallback while lazy components are fetched */}
      <Suspense fallback={<DelayedFallback />}>
        <Routes>
          <Route path='*' element={<Notfound />}></Route>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/services/serviceDetail/:title' element={<ServiceDetail />} />
          <Route path='/services/export' element={<Export />} />
          <Route path='/services/import' element={<Import />} />
          <Route path='/services/request' element={<ExportServiceRequest />} />
          <Route path='/product/newProduct' element={<NewProduct />} />
          <Route path='/product/usedProduct' element={<UsedProduct />} />
          <Route path='/product/usedProduct' element={<UsedProduct />} />
          <Route path='/services/blogs' element={<Blogs />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />}></Route>
        </Routes>
      </Suspense>
      <CallButton />
      <GoToTop />
      <TalkToUs />
      <Footer />
    </div>
  );
}

export default App;
