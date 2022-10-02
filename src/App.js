import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login></Login>}/>                                         
          <Route path="/shop" caseSensitive={false} element={<Shop></Shop>}/>
          <Route path="/review" caseSensitive={false} element={<Review></Review>}/>
          <Route path="/shipment" caseSensitive={false} element={<Shipment></Shipment>}/>
          <Route path="/inventory" caseSensitive={false} element={<Inventory></Inventory>}/>
          <Route path="/" exact caseSensitive={false} element={<Shop></Shop>}/>
          <Route path="/product/:productKey" caseSensitive={false} element={<ProductDetails></ProductDetails>}/>
          <Route path="*" caseSensitive={false} element={<NotFound></NotFound>}/>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
