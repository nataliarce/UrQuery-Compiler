import React, {useEffect, useState} from 'react'
import '../style/Style.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Buttons = () => {
  
  const [about, setAbout] = useState([]);
  
  const cargarAbout = () =>{
    axios.get('http://localhost:8080/about')
      .then(({data}) => setAbout(data))
      .catch((err) => {
        alert(err.message)
      });
  }
  useEffect( cargarAbout, []);
  
  return (
    <div className='nav-bg'>
      <nav className='nav'>
        <a className='nav__link' href='/'>
          <h1>URQUERY</h1>
        </a>
        <div>
          <Popup trigger={<button> About </button>}>
            {
              about.map(info =>
              <div>
                <p>{info.universidad}</p>
                <p>{info.escuela}</p>
                <p>{info.curso}</p>
                <p>{info.trabajo}</p>
                <p>{info.estudiantes}</p>
                <p>{info.semestre}</p>
              </div>)
            }
          </Popup>
        </div>
      </nav>
    </div>
  )
}
