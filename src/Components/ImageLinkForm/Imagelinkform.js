import React from 'react';
import './imagelinkform.css';

const Imagelinkform = ({ onInputChange, onrunitSubmit }) => {
    return (
        <div>
            <p className='f1 mb4'>
                {'Hi! I am a friendly robot. Call me, Moji.'}
            </p>
            <p className='f3 center'>
                {'I will detect any face in ANY of your pictures.'}
            </p>
            <p className='f3 center'>
                {'Try it out! Upload any image URL with a FACE.'}
            </p>
            <div className='f2 pa3 center'>
            <div className='pa4 br3 center shadow-5 form'>
            <input type='text' className='center' onChange={onInputChange} />
            <button className='center dib f3 pa3 black grow f1 link b--white br4' onClick={onrunitSubmit}>Run It</button>
            </div> 
            </div>
        </div>
    );

}

export default Imagelinkform;








