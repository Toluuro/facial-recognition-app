import React from 'react';
import Tilt from 'react-tilt';
import face from './images.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0.5'>
        <Tilt className="Tilt br3 shadow-2 " options={{ max : 55 }} style={{ paddingBottom:'5px', height: 150, width: 150 }} >
              <div className="Tilt-inner pa3"> <img alt='logo'src={face} /> </div>
        </Tilt>
        </div>
    );
}


export default Logo;