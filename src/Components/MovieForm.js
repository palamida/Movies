import React, { useState } from 'react'
import Rating from 'react-rating'
import useForm from "./hooks/useForm"

// get our fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
faEdit,
faTrashAlt
)


export default function MovieForm(props){
    // const[movie,editMovie]= useState({
    //    movie_title: useFormInput(props.movie_title),
    //   genre: props.genre,
    //   rating:props.rating,
    //   isChecked:props.explicit,
    //   explicitlabel:'non explicit'
    // });

    const { values, handleChange, handleSubmit, checkboxChange } = useForm({
        movie_title: props.movie_title, 
        genre: props.genre, 
        rating: props.rating,
        isChecked: props.explicit,
        checked: '',
        explicitlabel:'non explicit'
        }, 
        login);

    function login() {
      console.log(values);
    }


//   function handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log("Name/value=",name," / ",value)
//     editMovie()
//   //   this.setState(prevState => ({
//   //     edit_movie: {                   // object that we want to update
//   //         ...prevState.edit_movie,    // keep all other key-value pairs
//   //         [name]: value      // update the value of specific key
//   //     }
//   // }))
// }
 
  // onChangeRating(rating) {
  //   console.log("Rating value=",rating)
  //   this.setState(prevState => ({
  //     edit_movie: {                   // object that we want to update
  //         ...prevState.edit_movie,    // keep all other key-value pairs
  //         "rating": rating     // update the value of specific key
  //     }
  // }))
  // }

  //   onChangeExplicit(e){ 
  //     //   console.log(`Explicit: ${this.state.edit_movie.isChecked}`)
  //     // this.setState({ edit_movie.isChecked }) => (
  //     //   {
  //     //     edit_movie.isChecked: !edit_movie.isChecked
  //     //   }
  //     const check = !this.state.edit_movie.isChecked
  //     let explicitlabelnew="non explicit"
  //     if (check) { explicitlabelnew="explicit" } 
  //     this.setState(prevState => ({
  //       edit_movie: {                   // object that we want to update
  //           ...prevState.edit_movie,    // keep all other key-value pairs
  //           isChecked: check,    // update the value of specific key
  //           "explicitlabel": explicitlabelnew
  //       }
  //   }))
  //   }


  // function onSubmit(e) {
  //   e.preventDefault();
  //   console.log(`The values are ${movie.movie_title}, ${movie.genre}, ${movie.rating} and ${movie.isChecked}`)
  //       // this.props.onSave(this.state.edit_movie)
  //   }
  //   console.log(`The values are ${movie.movie_title}, ${movie.genre}, ${movie.rating} and ${movie.isChecked}`)
  // render() {

      return (
        <form onSubmit={handleSubmit}>
              {/* <form onSubmit={onSubmit}> */}
                  <div className="form-group">
                      <label>Movie name:  </label>
                      <input 
                          type="text" 
                          name="movie_title"
                          className="form-control" 
                          value={values.movie_title}
                          onChange={handleChange}
                    
                      />
                  </div>
                 <div className="form-group">
                      <label>Genre: </label>
                      <input 
                          type="text" 
                          name="genre"
                          className="form-control" 
                          value={values.genre}
                        onChange={handleChange}
                      />
                  </div>
                  <div className="form-group">
                      <label>Rating: </label>
                     <Rating 
                    //  {...this.props}
                      initialRating={values.rating} 
                    //  onChange={this.onChangeRating} 
                     />
  
                     
                  </div>
                  <div className="form-group">
                      <label>Explicit: </label>
                      <input
                          type="checkbox"
                          name="isChecked"
                          value={values.isChecked}
                        //   checked={values.checked}
                          onChange={checkboxChange}
                      />
                  </div>            
                  <div className="form-group">
                      <input type="submit" value="Submit movie" className="btn btn-primary"/>
                  </div> 
              </form>
      )
  // }
}

// function useFormInput(initialValue) {
//   const [property, setProperty]=useState()
//   const [value, setValue]=useState(initialValue)
//   console.log("IV="+value+" / "+initialValue)
//   function handleChange(e) {
//     console.log("IV change="+e.target.value+" / "+e.target.name+" / value="+value)
//     setValue(e.target.value)
//     setProperty(e.target.name)
//   }

//   return {
//     value,
//     onChange: handleChange
//   }
// }

  //     const name = event.target.name;
  //     const value = event.target.value;
  //     console.log("Name/value=",name," / ",value)
  //     editMovie()
  //   //   this.setState(prevState => ({
  //   //     edit_movie: {                   // object that we want to update
  //   //         ...prevState.edit_movie,    // keep all other key-value pairs
  //   //         [name]: value      // update the value of specific key
  //   //     }
  //   // }))
  // }

// function useFormInput = e => {
//     editMovie({
//       ...movie,
//       [e.target.name]: e.target.value
//     });
//   };

// function useFormInput(initialValue) {
//   const [value, setValue]=useState(initialValue)
//   console.log("Start Value="+value+" / IV="+initialValue)
//   function handleChange(e) {
//     console.log("Value before change="+value+" / target.value="+e.target.value+" / target.name="+e.target.name)
//     setValue(e.target.value)
//     console.log("Value on change="+value)
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }