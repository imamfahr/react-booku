import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Browser, Switch, Route, BrowserRouter} from 'react-router-dom'

//pages
import Home from './pages/Home'
import ReadingList from './pages/RadingList'
import ReadingPage from './pages/ReadingPage'
import Lpage from './pages/LPage'

//components
import Header from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route exact path = '/'>
          <Lpage />
        </Route>
        <Route path = '/find-books'>
          <Home />
        </Route>
        <Route path = '/reading-list'>
          <ReadingList />
        </Route>
        <Route path='/reading-page'>
          <ReadingPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
