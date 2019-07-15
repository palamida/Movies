import React, { Component } from 'react';

class Movie extends Component {     
    // constructor(props) {
    //     super(props);
    //     // this.onDeleteHandle = this.onDeleteHandle.bind(this);
    //     // this.state = {
    //     //     movie_list:this.props.movies
    //     // }
        
    // }
    //   onDeleteHandle() {
    //     let id = arguments[0];
    
    //     this.setState({
    //       startData: this.state.movie_list.filter(item => {
    //         if (item.id !== id) {
    //           return item;
    //         }
    //       })
    //     });
    //   }

    render() {
        let editButon=""
            if (this.props.edit) {
                editButon=<button type="submit" value="Submit">Edit Movie</button>
            }

        return( <p className="movie" onClick={() => {
           
            console.log("clicked "+this.props.movie_title)
            this.props.onEditMovie(this.props.id)
            }}>
            {this.props.movie_title} - 
            { editButon }
            </p>
        //     {/* <ul>
        //       {this.state.movie_list.map(item => (
        //         <li key={item.id} className={ item.done ? 'done' : 'hidden' }>
        //           {item.movie_title}
        //            <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
        //           {/*<button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
        //           <button onClick={this.onCompleteHandle.bind(this, item.id)}>Complete</button> */}
        //         </li>
        //       ))}
        //     </ul> */}
        //   </div>)
        )
    }
}

export default Movie;