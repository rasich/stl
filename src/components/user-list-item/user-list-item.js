import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import UpdateIcon from '@material-ui/icons/Update';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './user-list-item.css'

export default class UserListItem extends Component {

  render() {
    const {name, phone, email, country, age, onDelete, getUserIndex} =  this.props;
    return (
      <div className='user'>
      <div className='user-title'>
        <span title={name}>{name}</span>
        <span title={phone}>{phone}</span>
        <span title={email}>{email}</span>
        <span title={country}>{country}</span>
        <span title={age}>{age}</span>
      </div>

      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button 
          className='link-btn'
          style={{backgroundColor: '#ffffff'}}
          onClick={getUserIndex}
        >
          <Link className='link' to='/details'><UpdateIcon/></Link>
        </Button>

        <Button 
          style={{backgroundColor: '#ffffff'}}
          onClick={onDelete}
        >
          <HighlightOffIcon color="secondary"/>
        </Button>
      </ButtonGroup>
    </div>
    )
  }
}