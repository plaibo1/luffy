import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import MusicPage from './components/MusicPage/MusicPage';

function App(props) {

  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
        <div className="pageContainer">

            <Route path='/home' 
                render={() => <Home state={props.state.homePage} 
                                    addPost={props.addPost}
                        />}/>

            <Route path='/dialogs' render={()=> <Dialogs 
                state={props.state.dialogPage} />}/>

            <Route path='/music' render={ () => <MusicPage 
            state={props.state.musicPage} />} />

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
