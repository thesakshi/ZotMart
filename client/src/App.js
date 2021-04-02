import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state = {
    response: {}
  }

  componentDidMount() {
    console.log("mounting");
    axios.get('/api/v1/hello').then((res) => {
      
      const response = res.data;
      this.setState({response});
      console.log("hi");
    });
  }

  render() {
    return (
      <div className = "App">
        <h1> Hello from frontend</h1>
        <h2> {this.state.response.body}</h2>
      </div>
    )
  }
}

export default App;