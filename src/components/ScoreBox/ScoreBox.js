import React from 'react';

const ScoreBox = props => {

    return (
        <React.Fragment>
            <div className='row justify-content-end'>
                <div className='col-3'>Score: {props.score} </div>
                <div className='col-3'>Top Score: {props.topScore}</div>
            </div>
        </React.Fragment>
    )
}

export default ScoreBox;