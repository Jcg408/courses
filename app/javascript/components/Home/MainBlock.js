import React from 'react';

const MainBlock = () => {
    return ( 
        <section className = 'main-section'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className='col col-sm-12 col-md-5' id = 'column1'>
                        <div className='pt-4 mt-4'>
                             < h1>First Column</h1>
                       <p>Some kind of description</p>
                        </div>
                    </div>

                    <div className='col col-sm-12 col-md-7' id = 'column2'>
                        <div className='pt-4 mt-4' text-center>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/CjLb_t4Tqsw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                     </div>
                </div>
            </div>
        </section>
     );
}
 
export default MainBlock;

