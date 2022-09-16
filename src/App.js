import './App.css';
import Banner from './Components/Banner';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PopularPlans from './Components/PopularPlans';
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Signup from './Components/Signup';
import OurPlans from './Components/OurPlans';
import ContactUs from './Components/ContactUs';
import PlansMenu from './Components/PlansMenu';
import FreshVegetableEveryDay from './Components/FreshVegetableEveryDay';
import ChefDetails from './Components/ChefDetails';
import Testonomials from './Components/Testonomials';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={
        <>
        <Banner />
        <PopularPlans />
        <ChefDetails />
        <PlansMenu />
        <FreshVegetableEveryDay />
        <Testonomials />
        < ContactUs />
        <Footer />
        </>
      }/>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/ourplans' element={<OurPlans />} />

    </Routes>
  
    </BrowserRouter>

    
    
    
    

  );
}

export default App;
