import React, { Component } from 'react';
import Item from './Item'
import Active from './Active'
import '../../../css/table.css'

class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const items = this.props.courses.map(item=> {
            return (
                item.active ?
                <Active key={item.id} title={item.title} description={item.description}/> :
                 <Item key={item.id} title={item.title} description={item.description}/>
            )        
        });
        
        return (  
            <div className='container' id='table'>
                <h2>Start Your Garden</h2>
               {items}
            </div>
        );
    }
}
 
export default Table;