import React from 'react';
import './index.css';
import Header from '../../components/header/Header';
import Slider, {imagesIng} from '../../components/slider/Slider';
import Description from './components/description/Description'
import Clients from '../../components/clients/Clients'
const Engineering = () => {
  return (
      <section>
        <Header/>
          <Slider images={imagesIng}/>
          <Description/>
          <Clients/>
      </section>
  )
}
export default Engineering