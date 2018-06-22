import React from 'react';
import './Image.css';

const Image = props => {    

    return (
        <div 
            className='game-image'
            src='' alt={props.altTitle}
            id={props.id}
            style={{backgroundColor: props.imageColor}}
            onClick={props.onClick}
        />
    )
}

export default Image;