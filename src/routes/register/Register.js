/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes, { func } from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import { error } from 'util';
import { RegisterUser } from '../../helpersforApi/UserHelper';
import s from './Register.css';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    RegisterUser: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      useremail: '',
      userpassword: '',
      userconfirmpassword: '',
      errors: {},
    };
  }
  handleChange = e => {
    if (this.state.errors) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = {};
    // custom validations
    if (this.state.username === '') errors.username = 'User name cant be empty';
    if (this.state.useremail === '')
      errors.useremail = 'User email cant be empty';
    if (this.state.userpassword === '')
      errors.userpassword = 'User Password cant be empty';
    if (this.state.userconfirmpassword === '')
      errors.userconfirmpassword = 'User Password cant be empty';
    if (this.state.userpassword !== this.state.userconfirmpassword)
      errors.passwordmismatch = 'Password Mismatch';

    // setting all errrors
    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    const userArray = {
      username: this.state.username,
      useremail: this.state.useremail,
      userpassword: this.state.userpassword,
      userconfirmpassword: this.state.userconfirmpassword,
    };
    if (isValid) {
      this.props.RegisterUser(userArray);
    }
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="username">
                Username
              </label>
              <input
                className={classnames(s.input, {
                  [s.danger]: !!this.state.errors.username,
                })}
                id="username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
              {!!this.state.errors.username &&
                <span className={s.error}>
                  {this.state.errors.username}
                </span>}
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="useremail">
                Email Address
              </label>
              <input
                className={classnames(s.input, {
                  [s.danger]: !!this.state.errors.useremail,
                })}
                id="useremail"
                type="email"
                name="useremail"
                value={this.state.useremail}
                onChange={this.handleChange}
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
              {!!this.state.errors.useremail &&
                <span className={s.error}>
                  {this.state.errors.useremail}
                </span>}
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input
                className={classnames(s.input, {
                  [s.danger]: !!this.state.errors.userpassword,
                })}
                id="password"
                type="password"
                onChange={this.handleChange}
                name="userpassword"
                value={this.state.userpassword}
              />
              {!!this.state.errors.userpassword &&
                <span className={s.error}>
                  {this.state.errors.userpassword}
                </span>}
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="userconfirmpassword">
                Confirm Password:
              </label>
              <input
                className={classnames(s.input, {
                  [s.danger]: !!this.state.errors.userconfirmpassword,
                })}
                id="userconfirmpassword"
                type="password"
                onChange={this.handleChange}
                name="userconfirmpassword"
                value={this.state.userconfirmpassword}
              />
            </div>
            {!!this.state.errors.userconfirmpassword &&
              <span className={s.error}>
                {this.state.errors.userconfirmpassword}
              </span>}
            {!!this.state.errors.passwordmismatch &&
              <span className={s.error}>
                {this.state.errors.passwordmismatch}
              </span>}
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { RegisterUser })(withStyles(s)(Register));
