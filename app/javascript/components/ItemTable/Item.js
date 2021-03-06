import React, { Component } from 'react';
import Thumbnail from '../Image/Thumbnail';
import '../../../css/item.css';

const Item = props => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-10' id='episodes'>
                    <div className='card px-3'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Thumbnail />
                            </div>
                            <div className='col-md-8'>
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                                <div className='cta-wrapper'>
                                    <button onClick ={props.handleChange} className='btn cta-btn'>Watch This Video</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
