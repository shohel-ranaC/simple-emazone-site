import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>Email: {loggedInUser.email}</h3>
       <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login/>} />                                         
          <Route path="/shop" caseSensitive={false} element={<Shop/>} />
          <Route path="/review" caseSensitive={false} element={<Review/>}/>
          <Route path="/shipment" caseSensitive={false} element={<PrivateRoute> <Shipment/> </PrivateRoute>}/>
          <Route path="/inventory" caseSensitive={false} element={<PrivateRoute> <Inventory/> </PrivateRoute>}/>
          <Route path="/" exact caseSensitive={false} element={<Shop/>}/>
          <Route path="/product/:productKey" caseSensitive={false} element={<ProductDetails/>}/>
          <Route path="*" caseSensitive={false} element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
       
    </UserContext.Provider>
  );
}

export default App;
