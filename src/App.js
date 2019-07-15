import React, { Component } from 'react'
// import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Movies component here
import Movie from './Components/Movie'
import NewMovie from './Components/NewMovie.js'
import MovieList from './Components/MovieList.js'
import EditMovie from './Components/EditMovie.js'
import Footer from './Components/Footer'
import Header from './Components/Header'
import movieData from './Components/movieData'

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
      movieList: movieData.map((movie) => {
        return {
          ...movie,
          edit: false
        }
      }) 
    }
    this.onEditMovie = this.onEditMovie.bind(this)
    
  }

  onEditMovie(id) {
    console.log("Edit movie",id)
    this.setState(prevState => {
      const editMovieList = prevState.movieList.map((movie) => {
          if(movie.id===id) {
            movie.edit=true
            console.log("Editiram ",movie.movie_title)
          } else {
            movie.edit=false
          }
        
            return movie
        
      })
      return {
        movieList: editMovieList
      }
    })
  }


  render() {
  // let movieListE = this.state.movieList.map((movie) => {
  //   return {
  //     ...movie,
  //     edit: false
  //   }
  // })  
  const movieList = this.state.movieList.map((movie) => {
      return (
        <Movie key={movie.id} edit={movie.edit} id={movie.id} movie_title={movie.movie_title} genre={movie.genre} rating={movie.rating} explicit={movie.explicit} onEditMovie={this.onEditMovie} />
      )
    })

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
        {movieList}
      </div>
      <Footer />
      </Router>
    );
  }
}



export default App;
