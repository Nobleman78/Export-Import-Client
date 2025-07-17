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

  // Lazy load main page components
  const Home = lazy(() => import('./pages/Home'));
  const About = lazy(() => import('./pages/About'));
  const Service = lazy(() => import('./pages/Service'));
  const Product = lazy(() => import('./pages/Product/Product'));
  const Contact = lazy(() => import('./pages/Contact'));
  const Blogs = lazy(() => import('./ServicePages/Blogs_News/Blogs'));
  const ServiceDetail = lazy(() => import('./ServicePages/ServiceDetail/ServiceDetail'));
  const Export = lazy(() => import('./ServicePages/Export'));
  const Import = lazy(() => import('./ServicePages/Import'));
  const NewProduct = lazy(() => import('./ServicePages/NewProduct/NewProduct'));
  const UsedProduct = lazy(() => import('./ServicePages/UsedProduct/UsedProduct'));
  const ExportServiceRequest = lazy(() => import('./ServicePages/ServiceRequest/ServiceRequest'));
  const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

  // Lazy load Dashboard sub-components and ProductDescription for better code splitting
  const AdminHome = lazy(() => import('./pages/Dashboard/AdminHome'));
  const AddProducts = lazy(() => import('./pages/Dashboard/AddProducts'));
  const AddServices = lazy(() => import('./pages/Dashboard/AddServices'));
  const ManagedProducts = lazy(() => import('./pages/Dashboard/ManagedProducts'));
  const ManagedServices = lazy(() => import('./pages/Dashboard/ManagedServices'));
  const UpdateProduct = lazy(() => import('./pages/Dashboard/UpdateProduct'));
  const UpdateService = lazy(() => import('./pages/Dashboard/UpdateService'));
  const ProductDescription = lazy(() => import('./pages/Product/ProductDescription'));
  const Users = lazy(() => import('./pages/Dashboard/Users/Users'));
  const ContactData = lazy(() => import('./pages/Dashboard/ContactData'));
  const RequestData = lazy(() => import('./pages/Dashboard/RequestData'));


  function App() {
    return (
      <div>
        <Navbar />
        {/* Suspense boundary to show a loading fallback while lazy components are fetched */}
        <Suspense fallback={<DelayedFallback />}>
          <Routes>
            {/* Catch-all route for Notfound page */}
            <Route path='*' element={<Notfound />}></Route>

            {/* Main application routes */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Service />} />
            <Route path='/serviceDetail/:title' element={<ServiceDetail />} />
            <Route path='/services/export' element={<Export />} />
            <Route path='/services/import' element={<Import />} />
            <Route path='/services/request' element={<ExportServiceRequest />} />
            <Route path='/product/newProduct' element={<NewProduct />} />
            <Route path='/product/usedProduct' element={<UsedProduct />} />
            {/* Note: There was a duplicate route for /product/usedProduct, removed one. */}
            <Route path='/product/productDescription/:id' element={<ProductDescription />} />
            <Route path='/services/blogs' element={<Blogs />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />}></Route>

            {/* Dashboard routes - nested within the Dashboard component */}
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

            {/* Routes for updating products/services, outside of the nested dashboard routes */}
            <Route path='/updateProduct/:id' element={<UpdateProduct />}></Route>
            <Route path='/updateService/:id' element={<UpdateService />}></Route>
          </Routes>
        </Suspense>

        {/* Utility components that are always present */}
        <CallButton />
        <GoToTop />
        <TalkToUs />
        <Footer />
      </div>
    );
  }

  export default App;
