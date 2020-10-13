// write your custom hook here to control your checkout form
import React from "react";
// const CheckoutForm = (props) => {
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//     const [values, setValues] = useState(initialValue);

//     const handleChanges = (e) => {
//       setValues({ ...values, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setShowSuccessMessage(true);

const useCheckout = (initalValue) => {
  const [value, setValue] = React.useState(initalValue);
  const handleChange = (e) => {
    e.preventDefault();
    setValue(false ? true : { ...value, [e.target.name]: e.target.value });
  };
  return [value, handleChange];
};

export default useCheckout;
