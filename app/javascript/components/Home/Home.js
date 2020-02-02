import React, { Component } from 'react';

class Home  extends Component {
    state = { 
        course_module: [
            {id: 1, title: 'Set Up', description: 'This is a description', active: false},
            {id: 2, title: 'React/Rails', description: 'This is a description', active: false},
            {id: 3, title: 'Hello World', description: 'This is a description', active: false},
            {id: 4, title: 'Routing', description: 'This is a description', active: false}
        ]
     }
    render() { 
        return (
            <div>This is the Home component!</div>
          );
    }
}
 
export default Home ;
