import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import AppHeader from '../app-header';
import UserList from '../user-list';
import UserAddForm from '../user-add-form';

import date from '../data/fixtures.js';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...date],
      userIndex: null
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.sortList = this.sortList.bind(this);
    this.getUserIndex = this.getUserIndex.bind(this);
    this.setUpd = this.setUpd.bind(this);
    this.onBack = this.onBack.bind(this);
  }
  
  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  sortList() {
    this.setState(({data}) => {
      const newArr = data.sort((a, b) => a.name > b.name ? 1 : -1);
      return {
        data: newArr
      }
    })
  }

  getUserIndex(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      return {
        userIndex: index
      }
    })
  }

  setUpd(updUser) {
    const {id} = updUser;

    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const newArr = [...data.slice(0, index), updUser, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onBack() {
    this.setState(({data}) => {
      return {
        userIndex: null
      }
    })
  }

  
  render() {
    const {data, userIndex} = this.state;
    const allUsers = data.filter(item => item.id).length;

    return (
      <Router>
        <div className="App">
          <Paper className="main-paper" elevation={3}>
            <AppHeader
              allUsers={allUsers}
              updUser={this.state.userIndex}
              onSort={this.sortList}
              onBack={this.onBack}
            />
            <Container>
              
              <Route exact path='/'>
                <UserList 
                  users={data}
                  onDelete={this.deleteItem}
                  getUserIndex={this.getUserIndex}
                />
              </Route>

              <Route path='/details'>
                <UserAddForm 
                  user={data} 
                  userIndex={userIndex}
                  setUpd={this.setUpd}
                />
              </Route>
            </Container>
          </Paper>
        </div>
      </Router>
    );
  }
}