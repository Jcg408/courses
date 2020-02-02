import React from 'react';

const MainBlock = () => {
    return ( 
        <section className = 'main-section'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className='col col-sm-12 col-md-5' id = 'column1'>
                       < h1>First Column</h1>
                       <p>Some kind of description</p>
                    </div>
                    <div className='col col-sm-12 col-md-7' id = 'column2'>
                    < h1>Second Column</h1>
                       <p>Some kind of description</p>
                    </div>
            
                </div>
            </div>
        </section>
     );
}
 
export default MainBlock;

