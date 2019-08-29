import React, { Component } from 'react'
import MovieForm from './MovieForm'
import { faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";


export default class EditMovie extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this)
        this.onCancelEdit = this.onCancelEdit.bind(this)       
      }
    onSave(title) {
        console.log("Save movie",title)
        // this.props.editMovie(id)
    }

    onCancelEdit() {

    }
    render() {
        // console.log("Parametri ",this.props.match.params.id)
        console.log("Edited Movie",this.props.movieList)
        // // const editedMovie = this.props.movieList.filter(movie => movie.id = 3)
        // // const editedMovie = this.props.movieList.filter(movie => movie.id > 3).map((movie) => {
        // //     return (
        // //         movie
        // //     )            
        // // })
        const movieTitle="-"
        const editedMovie = this.props.movieList.filter(movieedit => movieedit.edit).map((movie) => {       
            return (
              <MovieForm key={movie.id} edit={movie.edit} id={movie.id} movie_title={movie.movie_title} genre={movie.genre} rating={movie.rating} explicit={movie.explicit} onSave={this.onSave} onCancelEdit={this.onCancelEdit}/>
            )
          })
        return (
            <div>
                <h2>Welcome to Edit Movie Component!</h2>
                {editedMovie} 
            </div>
        )

}
}