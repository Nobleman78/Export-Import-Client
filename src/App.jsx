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
import AdminHome from './pages/Dashboard/AdminHome';
import AddProducts from './pages/Dashboard/AddProducts';
import AddServices from './pages/Dashboard/AddServices';
import ManagedProducts from './pages/Dashboard/ManagedProducts';
import ManagedServices from './pages/Dashboard/ManagedServices';
import UpdateProduct from './pages/Dashboard/UpdateProduct';
import UpdateService from './pages/Dashboard/UpdateService';
import ProductDescription from './pages/Product/ProductDescription';
import Users from './pages/Dashboard/Users/Users';
import ContactData from './pages/Dashboard/ContactData';
import RequestData from './pages/Dashboard/RequestData';


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
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))

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
          <Route path='/serviceDetail/:title' element={<ServiceDetail />} />
          <Route path='/services/export' element={<Export />} />
          <Route path='/services/import' element={<Import />} />
          <Route path='/services/request' element={<ExportServiceRequest />} />
          <Route path='/product/newProduct' element={<NewProduct />} />
          <Route path='/product/usedProduct' element={<UsedProduct />} />
          <Route path='/product/usedProduct' element={<UsedProduct />} />
          <Route path='/product/productDescription/:id' element={<ProductDescription />} />
          <Route path='/services/blogs' element={<Blogs />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='/dashboard/adminHome' element={<AdminHome />}></Route>
            <Route path='/dashboard/addProducts' element={< AddProducts />}></Route>
            <Route path='/dashboard/addServices' element={<AddServices />}></Route>
            <Route path='/dashboard/manageProducts' element={<ManagedProducts />}></Route>
            <Route path='/dashboard/manageServices' element={<ManagedServices />}></Route>
            <Route path='/dashboard/allusers' element={<Users />}></Route>
            <Route path='/dashboard/contactData' element={<ContactData />}></Route>
            <Route path='/dashboard/requestServiceData' element={<RequestData />}></Route>
          </Route>
          <Route path='/updateProduct/:id' element={<UpdateProduct />}></Route>
          <Route path='/updateService/:id' element={<UpdateService />}></Route>
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
