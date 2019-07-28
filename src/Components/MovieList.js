import React, { Component } from 'react'
import Movie from './Movie'

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     movieList: this.props.movieList.map((movie) => {
        //       return {
        //         ...movie,
        //         edit: false
        //       }
        //     }) 
        //   }
        this.onSetEditableMovie = this.onSetEditableMovie.bind(this)
        this.onEditMovie = this.onEditMovie.bind(this)
        
      }

      onSetEditableMovie(id) {
        console.log("Set Editable movie (update movie) ",id)
        this.props.updateMovieList(id)
        // this.setState(prevState => {
        //   const editableMovieList = prevState.movieList.map((movie) => {
        //       if(movie.id===id) {
        //         movie.edit=true
        //         console.log("Postavljam editabilni ",movie.movie_title)
        //       } else {
        //         movie.edit=false
        //       }
            
        //         return movie
            
        //   })
        //   console.log(editableMovieList)
        //   return {
            
        //     movieList: editableMovieList
        //   }
        // })
      }

      onEditMovie(id) {
        console.log("Edit movie",id)
        this.props.editMovie(id)
        // this.setState(prevState => {
        //   const editMovieList = prevState.movieList.map((movie) => {
        //         return movie
        //   })
        //   console.log("Lista kod klika na edit:",editMovieList)
        //   return {
            
        //     movieList: editMovieList
        //   }
        // })
      }

    render() {
        console.log(this.props.movieList)
        const movieList = this.props.movieList.map((movie) => {
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
