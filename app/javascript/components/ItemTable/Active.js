import React, { Component } from 'react';
import Video from '../Image/Video'
// import '../../../css/Active.css';

const Active = props => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-10' id='episodes'>
                    <div className='card px-3'>
                        <div className='row'>
                            <div className='col-md-10'>
                                <Video />
                            </div>
                            <div className='title'>
          
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                            <div className='cta-wrapper'>
                                <a className='btn cta-btn'>Watch Video</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Active;
