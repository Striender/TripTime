import React from 'react';
import {Routes ,Route ,Navigate} from 'react-router-dom' ;

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import Guides from '../pages/Guides';
import Hotel from '../pages/Hotel';
import GuideDetails from '../pages/GuideDetails';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to= '/Home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tours/:id' element={<TourDetails/>} />
        <Route path='/guide/:id' element={<GuideDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/thank-You' element={<ThankYou/>} />
        <Route path='/guides' element={<Guides/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/tours/search' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers ;