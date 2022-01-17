import React, { Component } from 'react';
import axios from 'axios';

class Cadatro extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    axios.get('/api/test')
         .then(result => this.setState({ message: result.data.message }))
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1>{ this.state.message }</h1>
          
        </header>
      </div>
    )
  };
};

export default Cadatro;