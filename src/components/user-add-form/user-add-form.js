import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

import './user-add-form.css';

export default class UserAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user[this.props.userIndex].name,
      phone: this.props.user[this.props.userIndex].phone,
      email: this.props.user[this.props.userIndex].email,
      country: this.props.user[this.props.userIndex].country,
      age: this.props.user[this.props.userIndex].age,
      id: this.props.user[this.props.userIndex].id
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
      
    switch (e.target.id) {
      case 'name':
        this.setState({
          name: e.target.value
        })
        break;
      case 'phone':
        this.setState({
          phone: e.target.value
        })
        break;
      case 'email':
        this.setState({
          email: e.target.value
        })
        break;
      case 'country':
        this.setState({
          country: e.target.value
        })
        break;
      case 'age':
        this.setState({
          age: e.target.value
        })
        break;
      default:
        break;
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.setUpd(this.state);
  }

  render() {
    const {name, phone, email, country, age} =  this.state;

    return(
      <>
        <form
          className=""
          onSubmit={this.onSubmit}
        >
          <label>
            <span>
              Name:
            </span>
            <input
              type="text"
              id='name'
              value={name}
              onChange={this.onValueChange}
              required
            />
          </label>

          <label>
            <span>
              Phone:
            </span>
            <input
              type="tel"
              id='phone'
              value={phone}
              onChange={this.onValueChange}
            />
          </label>

          <label>
            <span>
              Email:
            </span>
            <input
              type="email"
              id='email'
              value={email}
              onChange={this.onValueChange}
            />
          </label>

          <label>
            <span>
              Country:
            </span>
            <select
              id='country'
              value={country}
              onChange={this.onValueChange}
            >
              <option>Australia</option>
              <option>Russia</option>
              <option>USA</option>
            </select>
          </label>

          <label>
            <span>
              Age:
            </span>
            <input
              type="number"
              min="1"
              id='age'
              value={age}
              onChange={this.onValueChange}
            />
          </label>

          <Button 
            className="form-button"
            type="submit"
            variant="contained"
            color="primary"
            tabIndex="-1"
          >
            Добавить
          </Button>
        </form>
      </>
    )
  }
}