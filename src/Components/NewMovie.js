import React, { Component } from 'react';
// var Rating = require('react-rating');
import Rating from 'react-rating'

export default class NewMovie extends Component {

      constructor(props) {
        super(props);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeExplicit = this.onChangeExplicit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            movie_name: '',
            genre: '',
            rating:'0',
            isChecked:false,
            explicitlabel:'non explicit',
            startData:this.props.startData
        }
    }
    onChangeMovieName(e) {
      this.setState({
        movie_name: e.target.value
      });
    }
    onChangeGenre(e) {
      this.setState({
        genre: e.target.value
      })  
    }
    onChangeRating(e) {
        console.log(`Rating: ${this.state.rating}, ${e} `)
      this.setState({
        rating: e
      })
    }


      onChangeExplicit(e){ 
          console.log(`Explicit: ${this.state.isChecked}`)
        this.setState(({ isChecked }) => (
          {
            isChecked: !isChecked
          }
        ));
      }
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.movie_name}, ${this.state.genre}, ${this.state.rating} and ${this.state.isChecked}`)
      this.setState({
        movie_name: '',
        genre: '',
        rating:'0',
        isChecked:false,
        startData: [...this.state.startData, {
          id: Date.now(),
          title: this.state.movie_name
        }]
      });
      }

    render() {
        return (
            <div>
                <h1>Another movie to be created...</h1>
                <div style={{marginTop: 10}}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Movie name:  </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.movie_name}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.genre}
                            onChange={this.onChangeGenre}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating: </label>
                       <Rating {...this.props} initialRating={this.state.rating} onChange={this.onChangeRating} />
    
                       
                    </div>
                    <div className="form-group">
                        <label>Explicit: </label>
                        <input
                            type="checkbox"
                            value={this.state.isChecked}
                            checked={this.state.isChecked}
                            onChange={this.onChangeExplicit}
                        />
                    </div>               
                    <div className="form-group">
                        <input type="submit" value="Submit movie" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}