import React, { Component } from 'react';

class Movies extends Component {     
    constructor(props) {
        super(props);
        this.onDeleteHandle = this.onDeleteHandle.bind(this);
        this.state = {
            movie_list:this.props.movies
        }
        
    }
      onDeleteHandle() {
        let id = arguments[0];
    
        this.setState({
          startData: this.state.movie_list.filter(item => {
            if (item.id !== id) {
              return item;
            }
          })
        });
      }

    render() {
        return( <div>

            <ul>
              {this.state.movie_list.map(item => (
                <li key={item.id} className={ item.done ? 'done' : 'hidden' }>
                  {item.movie_title}
                   <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
                  {/*<button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
                  <button onClick={this.onCompleteHandle.bind(this, item.id)}>Complete</button> */}
                </li>
              ))}
            </ul>
          </div>)
    }
}

export default Movies;