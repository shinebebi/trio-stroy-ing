import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Facts, {factsData} from './components/facts/Facts';
import Form from './components/form/Form';
import Contact from './components/contact/Contact'
import Clients from './components/clients/Clients'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Facts title="О строительной компании Триостройинжинириг" facts={factsData}/>
        <Form/>
        <Contact/>
        <Clients/>
        <Footer/>

    </div>
  );
}

export default App;
