import React from 'react';
import './Image.css';

const Image = props => {

    

    return (
        <div className='game-image' src='' alt={props.altTitle} data-id={props.id} data-clicked={props.hasBeenClicked} style={{backgroundColor: props.imageColor}} />
    )
}

export default Image;