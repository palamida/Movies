import React, { Component } from 'react'
import Movie from './Movie'

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: this.props.movieList.map((movie) => {
              return {
                ...movie,
                edit: false
              }
            }) 
          }
        this.onSetEditableMovie = this.onSetEditableMovie.bind(this)
        // this.onEditMovie = this.onEditMovie.bind(this)
        
      }

      onSetEditableMovie(id) {
        console.log("Set Editable movie",id)
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

    render() {
        console.log(this.state.movieList)
        const movieList = this.state.movieList.map((movie) => {
            return (
              <Movie key={movie.id} edit={movie.edit} id={movie.id} movie_title={movie.movie_title} genre={movie.genre} rating={movie.rating} explicit={movie.explicit} onSetEditableMovie={this.onSetEditableMovie} onEditMovie={this.onEditMovie}/>
            )
          })
        return (
            <div>
                <p>Welcome to MovieList Component!!</p>
                {movieList} 
            </div>
        )
    }
}
