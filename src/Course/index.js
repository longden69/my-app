import React from 'react'

import Lesson from './../Lesson'

class Course extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.registerCourse = this.registerCourse.bind(this);
		this.handleShowMore = this.handleShowMore.bind(this);
	}

	handleClick(buttonClicked) {
		console.log(this.props.name);
	}

	registerCourse() {
		console.log(this.refs.username.value);
	}

	showFreeCourse() {
		if(this.props.free) {
			return 	<div className="panel-footer">
	              		<button type="button" onClick={() => {this.handleClick('View')}} className="btn btn-warning btn-sm">View</button>
	              		<button type="button" onClick={() => {this.handleClick('Vote')}} className="btn btn-primary btn-sm">Vote</button>
	              		<button type="button" onClick={() => {this.handleClick('Purchase')}} className="btn btn-info btn-sm">Purchase</button>
	              	</div>;
		} else {
			return 	<div className="panel-footer">
						<div className="input-group">
							<input type="text" className="form-control" id="exampleInputAmount" ref="username" placeholder="Register" />
							<span className="input-group-btn">
								<button onClick={this.registerCourse} type="button" className="btn btn-success">Register</button>
							</span>
						</div>
					</div>;
		}
	}

	handleShowMore() {
		this.setState({
			isShow: !this.state.isShow
		});
	}

	render() {
		let listLesson = null;
		if(this.state.isShow) {
			listLesson = 	<ul className="list-group">
			              		<Lesson />
			              		<Lesson />
			              		<Lesson />
			              	</ul>;
		}
		return (
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	            <div className="panel panel-info">
	              <div className="panel-heading">
	                <h3 className="panel-title">{this.props.name}</h3>
	              </div>
	              <div className="panel-body">
	              <button onClick={this.handleShowMore} className="btn btn-success" >Show more</button>
	              <br/>
	              	{listLesson}
	              </div>
	              {this.showFreeCourse()}
	            </div>
	        </div>
			)
	}
}
export default Course
