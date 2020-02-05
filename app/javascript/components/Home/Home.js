import React, { Component } from 'react';
import MainBlock from './MainBlock';
import Table from '../ItemTable/Table'

class Home  extends Component {
    state = { 
       courses: [
            {id: 1, title: 'In the Beginning ', description: 'Planning the garden', active: false},
            {id: 2, title: 'The Soil', description: 'Test and amend the soil', active: true},
            {id: 3, title: 'Seeds and Seedlings', description: 'Choose your plants and plant methods', active: false},
            {id: 4, title: 'Pests', description: 'Watch out for these buggers! ', active: false}
        ]
     }
     
    render() { 
        return (
            <div>
                <MainBlock/>
                <Table courses={this.state.courses}/>
            </div>
          );
    }
}
 
export default Home ;
