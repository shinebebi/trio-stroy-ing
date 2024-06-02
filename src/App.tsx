import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Slider, {imagesIng, imagesRestore} from './components/slider/Slider';
import Facts, {factsData} from './components/facts/Facts';
import Form from './components/form/Form';
import Contact from './components/contact/Contact'
import Clients from './components/clients/Clients'
import Footer from './components/footer/Footer'
const imagesGlob = imagesIng.concat(imagesRestore);
function App() {
  return (
    <div className="App">
        <Header />
        <Slider images={imagesGlob}/>
        <Facts title="О строительной компании ТриоCтройИнжинириг" facts={factsData}/>
        <Clients/>

    </div>
  );
}

export default App;
