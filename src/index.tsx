import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Restoration from './pages/restoration/index'
import Engineering from './pages/engineering/index'
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
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
          </Routes>
      </Router>
      <Form/>
      <Contact/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
