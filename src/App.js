import React, { Component } from 'react';
import './App.css';

import Course from './Course'
import Caculator from './Caculator'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'LongNN',
      age: 23,
      isShowButton: false,
      myBallName: '',
      selectedValue: 'React js'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickShowButton = this.handleClickShowButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick(msg) {
    this.setState({
      name: 'Long Nguyen Ngoc',
      age: 23
    })
    console.log(this.refs.myName.value);
  }

  handleClickShowButton() {
    this.setState({
      isShowButton: !this.state.isShowButton
    });
  }

  handleChange(event) {
    this.setState({
      myBallName: event.target.value
    })
  }

  handleChangeSelect(event) {
    alert(event.target.value);
    this.setState({
      selectedValue: event.target.value
    });
  }

  render() {
    console.log('Render');
    const isShowButton = this.state.isShowButton;
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

    const arrayCourse = ['Angular js', 'Vue js', 'React js'];

    const listCourse = arrayCourse.map((course, index) => 
      <li key={index} className="list-group-item">{course}</li>
    );

    const listOptionCourse = arrayCourse.map((course, index) => 
      <option key={index} value={course}>{course}</option>
    )

    let button = null;

    if(isShowButton) {
      button = <button className="btn btn-primary" onClick={() => {this.handleClick('ahihi')}}>click here!</button>;
    }

    return (
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Info</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">{this.state.name}</li>
              <li className="list-group-item">{this.state.age}</li>
            </ul>
          </div>
        </div>
        {elementCourse}
        <input type="text" className="form-control" name="myName" ref="myName" />
        <br />
        <button className="btn btn-success" onClick={this.handleClickShowButton}>{(this.state.isShowButton) ? 'Hide button' : 'Show button'}</button>
        {button}
        <h2>List course</h2>
        <ul className="list-group">
          {listCourse}
        </ul>
        <br/>
        <br/>
        <form>
          <legend>Form title</legend>
        
          <div className="form-group">
            <label htmlFor="">{this.state.myBallName}</label>
            <input type="text" className="form-control" id="" value={this.state.myBallName} onChange={this.handleChange} placeholder="Input field" />
            <select value={this.state.selectedValue} onChange={this.handleChangeSelect} className="form-control">
              {listOptionCourse}
            </select>
          </div>
        </form>
        <Caculator />
      </div>
    );
  }
}

export default App;
