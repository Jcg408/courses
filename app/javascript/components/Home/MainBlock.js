import React from 'react';
import '../../../css/mainblock.css'

const MainBlock = () => {
    return ( 
        <section className = 'main-section'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className='col col-sm-12 col-md-5' id = 'column1'>
                        <div className='pt-4 mt-4'>
                            < h1>Organic Gardening</h1>
                            <p>Beginners guide to organic gardening. Starting small with basic concepts, you can have a productive garden.</p>
                        </div>
                        
                    </div>

                    <div className='col col-sm-12 col-md-7' id = 'column2'>
                        <div className='pt-4 mt-4' text-center>
                        <iframe width="500" height="300" src="https://www.youtube.com/embed/CjLb_t4Tqsw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                     </div>
                </div>
            </div>
        </section>
     );
}
 
export default MainBlock;

