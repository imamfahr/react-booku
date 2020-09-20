import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Browser, Switch, Route, BrowserRouter} from 'react-router-dom'

//pages
import Home from './pages/Home'
import ReadingList from './pages/RadingList'
import ReadingPage from './pages/ReadingPage'

//components
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />

      <Switch>
        <Route exact path = '/'>
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