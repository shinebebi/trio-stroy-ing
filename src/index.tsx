import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Restoration from './pages/restoration/index'
import Engineering from './pages/engineering/index'
import { HashRouter } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Form from './components/form/Form';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header';
import DoorRestore from './pages/restoration/components/doorRestore/DoorRestore'
import WindowRestore from './pages/restoration/components/windowRestore/WindowRestore'
import FurnitureRestore from './pages/restoration/components/furnitureRestore/FurnitureRestore'
import Services from './pages/services/Services'
import EngObj, {engineeringObj} from './pages/engineering/components/engObj/EngObj'
import Projects from './pages/projects/Projects'
import Production from './pages/production/Production'
import DoorManufactoring from './pages/manufacturing/doorManufacturing/DoorManufacturing'
import  WindowManufactoring from './pages/manufacturing/windowManufacturing/WindowManufacturing'
import ProductList from './pages/ingSystems/ProductListScreen'
import ProductDetails from './pages/ingSystems/ProductDetailsScreen'
import store from '../src/pages/ingSystems/data/store';
import { Provider } from 'react-redux';
import { products } from "../src/pages/ingSystems/data/data";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router basename='/trio-stroy-ing'>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/restore" element={<Restoration />} />
                  <Route path="/restore/doorrestore" element={<DoorRestore />} />
                  <Route path="/restore/windowrestore" element={<WindowRestore />} />
                  <Route path="/restore/furniturerestore" element={<FurnitureRestore />} />
                  <Route path="/engineering" element={<Engineering/>}/>
                  <Route path='/services' element={<Services/>}/>
                  <Route path='/engineering/prom' element={<EngObj engObj={engineeringObj[0]}/>}/>
                  <Route path='/engineering/civil' element={<EngObj engObj={engineeringObj[1]}/>}/>
                  <Route path='/engineering/exploat' element={<EngObj engObj={engineeringObj[2]}/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/production' element={<Production/>}/>
                  <Route path='/doormanufactoring' element={<DoorManufactoring/>}/>
                  <Route path='/windowmanufactoring' element={<WindowManufactoring/>}/>
                  <Route path='/ing-systems' element={<ProductList/>}>
                  </Route>
                  {products.map((elem: any, index:number) => (
                      <Route path={`/ing-systems/${elem.id}`} element={<ProductDetails info={elem}/>} key={index}/>
                  ))}
              </Routes>
          </Router>
          <Form/>
          <Contact/>
          <Footer/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
