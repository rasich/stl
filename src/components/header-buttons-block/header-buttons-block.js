import React from 'react';

import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const HeaderButtonsBlock = ({onSort, updUser, onBack}) => {
  let classNameSort = '';
  let classNameBack = '';
  if (updUser === 'list') {
    classNameSort = 'btn-group btn-sort visible'
    classNameBack = 'btn-group hidden'
  } else {
    classNameSort = 'btn-group btn-sort hidden'
    classNameBack = 'btn-group visible'
  }

  return (
    <>
      <Button 
        className={classNameSort}
        variant="contained" 
        color="primary"
        onClick={onSort}
      >
        <SortByAlphaIcon/>
      </Button>


      <Button 
        className={classNameBack}
        variant="contained" 
        color="primary"
        onClick={onBack}
      >
        <Link className='link' to='/'>
          <ArrowBackIcon htmlColor="#ffffff"/>
        </Link>
      </Button>
    </>
  )
}

export default HeaderButtonsBlock;