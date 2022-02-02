import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import HomeContainer from './components/Home/HomeContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPageContainer from './components/UsersPage/UserPageContainer';
import Login from './components/LoginPage/Login';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import {initializedApp} from './Redux/app-reducer'

class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader />

    return (
      <div className="App">

        <BrowserRouter>
        <Navbar />
          <div className="pageContainer">
  
              <Route path='/home/:userId?' 
                  render={() => <HomeContainer />}
              />
  
              <Route path='/dialogs' render={()=> <DialogsContainer />}
              />
  
              <Route path='/users' render={ () => <UsersPageContainer/>} />
  
              <Route path='/login' render={ () => <Login /> } />
  
          </div>
        </BrowserRouter>
  
      </div>
    )
  }

}

const mstp = (state) => ({
  initialized: state.app.initialized
})

export default connect(mstp, {
  initializedApp
})(App);
