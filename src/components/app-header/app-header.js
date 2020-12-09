import React from 'react';
import { Box } from '@material-ui/core';

import HeaderButtonsBlock from '../header-buttons-block';

import './app-header.css';


const AppHeader = ({allUsers, updUser, onSort, onBack}) => {

  let classNames = 'empty';
  if (allUsers === 0) {
    classNames = 'empty visible'
  }

  let test = '';
  let titleList = '';
  let titleUpdate = ''
  if (updUser === null) {
    test = 'list';
    titleUpdate = 'hidden'
  } else {
    test = 'upd';
    titleList = 'hidden'
  }
  
  return (
    <Box  bgcolor="secondary.main" className="header">
      <h1>
        <span className={titleList}><span className={classNames}>Empty</span> List</span>
        <span className={titleUpdate}>Update</span>
      </h1>
      <HeaderButtonsBlock
        onSort={() => onSort()}
        updUser={test}
        onBack={() => onBack()}
      />
    </Box>
  )
}

export default AppHeader;