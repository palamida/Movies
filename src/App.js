import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Movies component here
import Movies from './Components/Movies';
import NewMovie from './Components/NewMovie.js';
import MovieList from './Components/MovieList.js';
import EditMovie from './Components/EditMovie.js';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     show: false
  //   };
  // }
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      edit: false,
      id: null,
      startData: [{
        id: '1',
        movie_title: 'Rambo',
        genre:'Action',
        rating:'4',
        explicit: false
      }, {
        id: '2',
        movie_title: 'Running man',
        genre:'Action',
        rating:'4',
        explicit: false
      }, {
        id: '3',
        movie_title: '9 and a half weeks',
        genre:'Romance',
        rating:'4',
        explicit: true
      }, {
        id: '4',
        movie_title: 'Superman III',
        genre:'SF',
        rating:'3',
        explicit: false
      }]
    }
  }


  render() {
    return (
      <Router>
        <Header />
      <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Movie database CRUD</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home page</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/add-movie'} className="nav-link">Create new Movie</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/movie-list'} className="nav-link">Movie List</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/add-movie' component={ NewMovie } />
              <Route path='/edit/:id' component={ EditMovie } />
              <Route path='/movie-list' component={ MovieList } />
          </Switch>
        {/* <Movies movies={this.state.startData} /> */}
      </div>
      <Footer />
      </Router>
    );
  }
}



export default App;
