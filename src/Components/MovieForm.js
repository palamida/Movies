import React, { Component } from 'react';
import Rating from 'react-rating'

// get our fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
// import { faHome } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(
faEdit,
faTrashAlt
)


export default class MovieForm extends Component {

    constructor(props) {
      super(props);
      this.onChangeMovieName = this.onChangeMovieName.bind(this);
      this.onChangeGenre = this.onChangeGenre.bind(this);
      this.onChangeRating = this.onChangeRating.bind(this);
      this.onChangeExplicit = this.onChangeExplicit.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    //   this.state = {
    //       edit_movie_title: this.props.movie_title,
    //       edit_genre: this.props.genre,
    //       edit_rating:this.props.rating,
    //       edit_isChecked:this.props.explicit,
    //       explicitlabel:'non explicit',
    //       startData:this.props.startData
    //   }
      this.state = {
        edit_movie: {
            movie_title: this.props.movie_title,
            genre: this.props.genre,
            rating:this.props.rating,
            isChecked:this.props.explicit,
            explicitlabel:'non explicit'
        }
    }
  }


  handleChange(event) {
    event.preventDefault();
    let edit_movie = this.state.edit_movie;
    let name = event.target.name;
    let value = event.target.value;

    edit_movie[name] = value;

    this.setState({edit_movie})
  }

  onChangeMovieName(e) {
    // this.setState({
    //   edit_movie.movie_title: e.target.value
    // });
    // this.setState(prevState => {
    //     const movieEntry1 = prevState.edit_movie.movie_title
    //     return {
    //       movieEntry1: e.target.value
    //     }
    //   })
  }
  onChangeGenre(e) {
    // this.setState(prevState => {
    //     const movieEntry2 = prevState.edit_movie
    //     movieEntry2.genre=e.target.value
    //     return {
    //       edit_movie: movieEntry2
    //     }
    //   })
    // this.setState({edit_movie[genre]: e.target.value});
  }
  onChangeRating(e) {
    this.setState(prevState => {
        const movieEntry3 = prevState.edit_movie.movie_rating
        return {
          movieEntry3: e.target.value
        }
      })
  }


    onChangeExplicit(e){ 
        console.log(`Explicit: ${this.state.edit_movie.isChecked}`)
    //   this.setState(({ edit_movie.isChecked }) => (
    //     {
    //       edit_movie.isChecked: !edit_movie.isChecked
    //     }
    //   ));
      this.setState(prevState => {
        const movieEntry4 = prevState.edit_movie.movie_isChecked
        return {
          movieEntry4: !movieEntry4
        }
      })
    }
  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.edit_movie["movie_title"]}, ${this.state.edit_movie.genre}, ${this.state.edit_movie.rating} and ${this.state.edit_movie.isChecked}`)
    // this.setState({
    //   edit_movie_title: '',
    //   edit_genre: '',
    //   rating:'0',
    //   isChecked:false,
    // });
        this.props.onSave(this.state.edit_movie)

    }

  render() {
      return (
     
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Movie name:  </label>
                      <input 
                          type="text" 
                          name="movie_title"
                          className="form-control" 
                          value={this.state.edit_movie.movie_title}
                        //   onChange={this.onChangeMovieName}
                          onChange={this.handleChange}
                      />
                  </div>
                  <div className="form-group">
                      <label>Genre: </label>
                      <input 
                          type="text" 
                          name="genre"
                          className="form-control" 
                          value={this.state.edit_movie.genre}
                        //   onChange={this.onChangeGenre}
                        onChange={this.handleChange}
                      />
                  </div>
                  <div className="form-group">
                      <label>Rating: </label>
                     <Rating {...this.props} initialRating={this.state.edit_movie.rating} onChange={this.onChangeRating} />
  
                     
                  </div>
                  <div className="form-group">
                      <label>Explicit: </label>
                      <input
                          type="checkbox"
                          value={this.state.edit_movie.isChecked}
                          checked={this.state.edit_movie.isChecked}
                          onChange={this.onChangeExplicit}
                      />
                  </div>               
                  <div className="form-group">
                      <input type="submit" value="Submit movie" className="btn btn-primary"/>
                  </div>
              </form>
      )
  }
}