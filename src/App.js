import React, { Component } from 'react'
// import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Movies component here
// import Movie from './Components/Movie'
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
      editMovie: null,
      movieList: movieData.map((movie) => {
        return {
          ...movie,
          edit: false
        }
      }) 
    }
    // this.onSetEditableMovie = this.onSetEditableMovie.bind(this)
    // this.onEditMovie = this.onEditMovie.bind(this)
    this.editMovie = this.editMovie.bind(this)
    this.updateMovieList = this.updateMovieList.bind(this)
    
  }

  updateMovieList(id) {
console.log("Update movie list - id=",id)
this.setState(prevState => {
  const editableMovieList = prevState.movieList.map((movie) => {
      if(movie.id===id) {
        movie.edit=true
        console.log("Postavljam editabilni ",movie.movie_title)
      } else {
        movie.edit=false
      }  
        return movie   
  })
  return {
    movieList: editableMovieList
  }
})
  }


editMovie(id) {
    console.log("Movie Id koji se editira=",id)
    const editMovieId=id
    console.log("Movie Id koji se editira=",editMovieId)

    this.setState(prevState => {
      const editableMovieList = prevState.movieList.map((movie) => {
          if(movie.id===id) {
            movie.edit=true
            console.log("Otvaram za editiranje ",movie.movie_title)
          } else {
            movie.edit=false
          }  
            return movie   
      })
      return {
        movieList: editableMovieList
      }
    })
    // history.push('/edit/:id');
    // console.log("History=",this.history)
    // this.setState(prevState => {
    //   const editMovieList = prevState.movieList.map((movie) => {
    //         return movie
    //   })
    //   console.log("Lista kod klika na edit:",editMovieList)
    //   return {
        
    //     movieList: editMovieList
    //   }
    // })

    // return <Redirect to='/edit/' />
    // <Route path='/edit/:id' render={() => (<EditMovie movieList={this.state.movieList}/>)}/>
    // <Route path={`${match.path}/edit/:id`} component={EditMovie} />
  }


  render() {
  // let movieListE = this.state.movieList.map((movie) => {
  //   return {
  //     ...movie,
  //     edit: false
  //   }
  // })  
  // const movieList = this.state.movieList.map((movie) => {
  //     return (
  //       <Movie key={movie.id} edit={movie.edit} id={movie.id} movie_title={movie.movie_title} genre={movie.genre} rating={movie.rating} explicit={movie.explicit} onSetEditableMovie={this.onSetEditableMovie} onEditMovie={this.onEditMovie}/>
  //     )
  //   })

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
                  <Link to={'/movies'} className="nav-link">Movie List</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
          {/* <FontAwesomeIcon icon={['far', 'fa-trash-alt']} /> */}
       
              <Route exact path='/add-movie' component={ NewMovie } />
              {/* <Route path='/edit/:id' component={ EditMovie } /> */}
              <Route path='/edit/:id' render={() => (<EditMovie movieList={this.state.movieList}/>)}/>
              {/* <Route path='/edit/:id' component={EditMovie} />; */}
              {/* <Route path='/movie-list' component={ MovieList } /> */}
              <Route path='/movies' render={() => (<MovieList movieList={this.state.movieList} updateMovieList={this.updateMovieList} editMovie={this.editMovie}/>)}/>
          </Switch>
        {/* <Movies movies={this.state.startData} /> */}
        {/* {movieList} */}
      </div>
      <Footer />
      </Router>
    );
  }
}



export default App;
