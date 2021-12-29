import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavContainer from './components/nav/NavContainer';
import UsersList from './components/usersList/UsersList';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderComponent from './components/header/HeaderContainer';


const App = () => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      {/* <Header /> */}
      <HeaderComponent />
      <NavContainer />
      <div className='app-wrapper-content'>
      <Route path={'/profile/:userId?'} render={ () => ( <ProfileContainer />)} />
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
