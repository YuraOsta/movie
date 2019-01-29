import React, { Component } from 'react';
import styles from './App.css';
import FilmList from './components/filmList/FilmList';
import Auth from './components/auth/Auth';
import Menu from './components/munu/Menu';
import Burger from './components/munu/burger/Burger';
import { toggleMenuHandler } from './redux/actions/menuAction';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={styles.App}>
          <Menu 
            showMenu={this.props.showMenu}
            toggleMenuHandler={this.props.toggleMenuHandler}
          />
          <Burger 
            showMenu={this.props.showMenu}
            toggleMenuHandler={this.props.toggleMenuHandler}
          />
        
          <Switch>
            <Route path='/auth' component={Auth}/>
            <Route path='/' component={FilmList}/>
          </Switch>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    showMenu : state.menu.openedMenu
  }
}
function mapDispatchToProps(dispatch){
  return {
    toggleMenuHandler: () => dispatch(toggleMenuHandler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
