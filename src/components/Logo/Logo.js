import React from 'react';
import Tilt from 'react-tilt';
import wizard from './wizard.png';
import './Logo.css';


const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa2"> 
                    <img src={wizard} alt="Fancy wizard logo"/> 
                </div>
            </Tilt>
        </div>
   );
}

export default Logo;