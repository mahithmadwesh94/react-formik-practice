import React from 'react';

import './style.css';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      gender: '',
      role: '',
      terms: '',
      errors: {
        name: '',
        email: '',
        gender: '',
        role: '',
        terms: ''
      }
    };
  }

  handleChange = event => {
    const { name, value, checked } = event.target;

    if (name === 'terms') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }

    const errors = { ...this.state.errors };
    switch (name) {
      case 'name': {
        errors.name = !value ? 'Name is Required' : null;
        break;
      }
      case 'email': {
        errors.email = !value ? 'Email is Required' : null;
        break;
      }
      case 'gender': {
        errors.gender = !value ? 'Gender is Required' : null;
        break;
      }
      case 'terms': {
        errors.terms = !checked ? 'T&C approval is Required' : null;
        break;
      }
    }

    this.setState({ errors: errors });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Job Application</h1>
        <Form />
        {/* <form onSubmit={this.handleSubmit}>
          <div>
            <label>Candidate Name: </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <br />
            <span className="error">
              {this.state.errors.name ? this.state.errors.name : <></>}
            </span>
          </div>
          <br />
          <div>
            <label>Candidate Email: </label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br />
            <span className="error">
              {this.state.errors.email ? this.state.errors.email : <></>}
            </span>
          </div>
          <br />
          <div>
            <label>Gender: </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
              checked={this.state.gender === 'male'}
            />

            <label>Male</label>

            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
              checked={this.state.gender === 'female'}
            />
            <label>Female</label>

            <input
              type="radio"
              name="gender"
              value="other"
              onChange={this.handleChange}
              checked={this.state.gender === 'other'}
            />

            <label>Other</label>
            <br />
            <span className="error">
              {this.state.errors.gender ? this.state.errors.gender : <></>}
            </span>
          </div>
          <br />
          <div>
            <label>Role: </label>
            <select
              onChange={this.handleChange}
              name="role"
              value={this.state.role}
            >
              <option value="react"> React Developer</option>
              <option value="node"> Node Developer</option>
              <option value="mern"> MERN Developer</option>
            </select>
          </div>

          <br />
          <div>
            <input
              onChange={this.handleChange}
              name="terms"
              type="checkbox"
              checked={this.state.terms}
            />
            <label>Accept terms and Conditions</label>
            <br />
            <span className="error">
              {this.state.errors.terms ? this.state.errors.terms : <></>}
            </span>
          </div>
          <br />
          <input type="submit" value="submit" />
        </form> */}
      </div>
    );
  }
}
