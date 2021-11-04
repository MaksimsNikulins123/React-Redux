import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route} from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
// import UsersContainer from './components/users/UsersContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavContainer from './components/nav/NavContainer';
import UsersList from './components/usersList/UsersList';

const App = () => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
      <Route path='/profile' render={ () => ( <Profile />)} />
      <Route path='/dialogs' render={ () => ( <DialogsContainer />)}/>
      <Route path='/users' render={ () => ( <UsersList />)}/>         
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
     
      </div > 
    </div>
    </BrowserRouter>
  );
}

export default App;
