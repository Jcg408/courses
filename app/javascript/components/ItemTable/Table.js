import React, { Component } from 'react';
import Item from './Item'
import '../../../css/table.css'

class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const items = this.props.courses.map(item=>{
            return <Item key={item.id} title={item.title} description={item.description}/>
        });
        
        return (  
            <div className='container' id='table'>
                <h2>Organic Gardening Series</h2>
               {items}
            </div>
        );
    }
}
 
export default Table;