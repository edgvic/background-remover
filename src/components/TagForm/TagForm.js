import React from 'react';
import './TagForm.css';


const TagForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className='ma4 mt0'>
            <p className='f3'>
                {'Check the impact of the user in the game.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className='f4 pa2 w-80 center' type='text' placeholder='Enter your tag / username' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonSubmit}>Search</button>
                </div>
            </div>
        </div>
   );
}

export default TagForm;