import React, { Component } from 'react';
import './App.css';

import Course from './Course'

class App extends Component {
  render() {
  	const items = [
  		{
  			name: 'React js',
  			time: '30h',
  			free: false,
  			desc: 'React'
  		},
  		{
  			name: 'Angular 4x',
  			time: '35h',
  			free: true,
  			desc: 'Angular 4x'
  		},
  		{
  			name: 'Nodejs',
  			time: '55h',
  			free: true,
  			desc: 'Nodejs'
  		}
  	]

  	const elementCourse = items.map((item, index) => {
  		return <Course key={index} name={item.name} free={item.free} />
  	});

    return (
      <div className="container">
      	{elementCourse}
      </div>
    );
  }
}

export default App;
