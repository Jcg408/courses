import React, { Component } from 'react';
import Item from './Item'
import '../../../css/table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className='container' id='table'>
                <h2>Organic Gardening Series</h2>
                <Item/>
            </div>
        );
    }
}
 
export default Table;