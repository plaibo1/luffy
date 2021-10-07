import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'

import HomeContainer from './components/Home/HomeContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MusicPageContainer from './components/MusicPage/MusicPageContainer';
import UsersPageContainer from './components/UsersPage/UserPageContainer';

function App(props) {

  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
        <div className="pageContainer">

            <Route path='/home' 
                render={() => <HomeContainer />}
            />

            <Route path='/dialogs' render={()=> <DialogsContainer />}
            />

            <Route path='/users' render={ () => <UsersPageContainer/>} />

            <Route path='/music' render={ () => <MusicPageContainer />} />

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
