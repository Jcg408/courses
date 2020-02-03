import React, { Component } from 'react';
import Thumbnail from '../Image/Thumbnail';
import '../../../css/item.css';

const Item = props => {
    return (
        <div className='container'>
           <div className='row'>
            <div className='col-md-10 offset-1' id='thumbnail'>
                  <div className='card px-5'>
                           
                            <div className='row'>
                              <div className='col-md-4'>
                                 <Thumbnail />
                              </div>
                              <div className='col-md-8'>
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

export default Item;
