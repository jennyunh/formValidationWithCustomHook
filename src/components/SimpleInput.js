import useInput from '../hooks/useInput';


const SimpleInput = (props) => {

const { value: enteredNameVal, 
  isValid: enteredNameIsValid,
  hasError: nameInputHasError, 
  valueHandler: nameChangeHandler,
inputBlurHandler: nameBlurHandler,
reset: resetNameInput
} = useInput(value => value.trim() !== '');


const { value: enteredEmailVal, 
  isValid: enteredEmailIsValid,
  hasError: emailInputHasError, 
  valueHandler: emailChangeHandler,
inputBlurHandler: emailBlurHandler,
reset: resetEmailInput
} = useInput(value => value.includes("@"));




let formIsValid = false;


//Check if all inputs are valid, if so, set formIsValid to true.
if (enteredNameIsValid && enteredEmailIsValid) {
  formIsValid = true;
}







    //ON SUBMIT
const onSubmitHandler = (e) => {
e.preventDefault();


//If the entered name and email is invalid, dont submit anything
if (!enteredNameIsValid || !enteredEmailIsValid) {
  return
}


//Restart all states.
resetNameInput();

resetEmailInput();

}




//toggle classes
const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (

    <form onSubmit={onSubmitHandler}>

  
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' id='name' 
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={enteredNameVal}/>
    {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
        type='text' id='email' 
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmailVal}/>
    {emailInputHasError && <p className="error-text">Invalid Email</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
