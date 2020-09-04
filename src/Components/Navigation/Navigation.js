import React from 'react';
import './Nav.css';


const Navigation = ({onRouteChange, IsSignedIn}) => {
        if (IsSignedIn) {
            return (
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange('signout')} className='f3 site underline pa3 pointer ba b--white-20 site-nav'>Sign Out</p>
            </nav>
            );
        } else {
            return (

            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange('signin')} className='f3 site underline pa3 pointer ba b--white-20 site-nav'>Sign In</p>
                <p onClick={()=>onRouteChange('Register')} className='f3 site underline pa3 pointer ba b--white-20 site-nav'>Register</p>
            </nav>

            );
        }
       
}

export default Navigation;