import React, { Component } from 'react';
import MainBlock from './MainBlock';
import Table from '../ItemTable/Table';
import axios from 'axios'

class Home extends Component {
    state = {
        courses: [ ]
    };

    componentDidMount() {
       axios.get('/episodes.json')
       .then(resp  => {
            const data = resp.data.episode
            this.setState({
                courses: data
            })
       })
       .catch(data=> {
          console.log(data)
       })
    }

    handleChange = (item, event) => {
        event.preventDefault();

        const courses = [...this.state.courses];
        courses.map(episode => {
            episode.active = false;
        });
        item.active = !item.active;
       
        this.setState({courses})
    };

    render() {
        return (
            <div>
                <MainBlock />
                <Table
                    handleChange={this.handleChange}
                    courses={this.state.courses}
                />
            </div>
        );
    }
}

export default Home;
