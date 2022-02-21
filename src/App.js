import React, { Suspense } from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route} from 'react-router-dom'
import HomeContainer from './components/Home/HomeContainer'
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { initializedApp } from './Redux/app-reducer'
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

const UsersPageContainer = React.lazy(() => import('./components/UsersPage/UserPageContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/LoginPage/Login'));



class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader />

    return (
      <div className="App">


        <Navbar />
        <div className="pageContainer">

          <Route path='/home/:userId?'
            render={() => <HomeContainer />}
          ></Route>

          <Suspense fallback={<span>Loading...</span>}>
            <Route path='/dialogs' component={ DialogsContainer } />
            <Route path='/users' component={ UsersPageContainer } />
            <Route path='/login' component={ Login } />
          </Suspense>

        </div>

      </div>
    )
  }

}

const mstp = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mstp, {
  initializedApp
})(App);


const LuffyApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default LuffyApp;