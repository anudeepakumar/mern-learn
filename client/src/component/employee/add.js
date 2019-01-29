import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { connect } from 'react-redux';
import { addEmplyee } from '../../actions/employeeAction';

class AddEmployee extends Component {
	constructor() {
		super();
		this.state = {
			number: '',
			name: '',
			email: '',
			password: '',
			phone: '',
			account: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => {
		// console.log(e)
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const newEmployee = {
			number: this.state.number,
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			phone: this.state.phone,
			account: this.state.account
		}
		this.props.addEmplyee(newEmployee);
	}

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.errors) {
			console.log("here", nextProps.errors)
			this.setState({errors: nextProps.errors});
		}
	}

	render() {
		const {errors} = this.state;
		console.log(errors)
		return (
			<div className="container">
				<form noValidate onSubmit={this.onSubmit}>
					<div className="form-group">
						<label htmlFor="employeeNumber">Enter employee number</label>
						<input className={classnames("form-control", {"is-invalid": errors.number})} name="number" id="employeeNumber" type="text" onChange={this.onChange} value={this.state.number} />
						{errors.number && (<div className="invalid-feedback">{errors.number}</div>)}
					</div>
					<div className="form-group">
						<label htmlFor="employeeName">Enter employee name</label>
						<input className={classnames("form-control", {"is-invalid": errors.name})} name="name" id="employeeName" type="text" onChange={this.onChange} value={this.state.name} />
						{errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
					</div>
					<div className="form-group">
						<label htmlFor="employeeEmail">Enter employee email</label>
						<input className={classnames("form-control", {"is-invalid": errors.email})} name="email" id="employeeEmail" type="email" onChange={this.onChange} value={this.state.email} />
						{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
					</div>
					<div className="form-group">
						<label htmlFor="employeePassword">Enter Password</label>
						<input className={classnames("form-control", {"is-invalid": errors.password})} name="password" id="employeePassword" type="password" onChange={this.onChange} value={this.state.password} />
						{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
					</div>
					<div className="form-group">
						<label htmlFor="employeePhone">Enter phone number</label>
						<input className={classnames("form-control", {"is-invalid": errors.phone})} name="phone" id="employeePhone" type="text" onChange={this.onChange} value={this.state.phone} />
						{errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
					</div>
					<div className="form-group">
						<label htmlFor="employeeAccount">Enter Account</label>
						<input className={classnames("form-control", {"is-invalid": errors.account})} name="account" id="employeeAccount" type="text" onChange={this.onChange} value={this.state.account} />
						{errors.account && (<div className="invalid-feedback">{errors.account}</div>)}
					</div>
					<input type="submit" value="submit" />
				</form>
			</div>
		)
	}
}

// AddEmployee.propTypes = {
// 	employee: 
// }

const mapStateToProps = (state) => ({
	employee: state.employee,
	errors: state.errors
});

export default connect(mapStateToProps, { addEmplyee })(AddEmployee);