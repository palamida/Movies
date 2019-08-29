import { useState } from 'react'

const useForm = (initialValues, callback) => {

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    console.log("Checkbox "+event.target.name+" / "+event.target.value)
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const checkboxChange = (event) => {
    event.persist();
    console.log("Checkbox "+event.target.name+" / "+event.target.value)
    // event.target.value ? setValues(values => ({ ...values, checked:"checked" })) : setValues(values => ({ ...values, checked:"c" }))
    setValues(values => ({ ...values, [event.target.name]: !event.target.value }));
    console.log("Checkbox "+event.target.name+" / "+event.target.value)
  };

  // const checkboxState = () => {
  //   if values.isChecked 
  //     return "check"
  //     else
  //     return "" 
  // };

  return {
    handleChange,
    handleSubmit,
    checkboxChange,
    values,
  }
};

export default useForm;
