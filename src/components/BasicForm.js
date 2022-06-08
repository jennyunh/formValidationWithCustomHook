import useInput from '../hooks/useInput';

const BasicForm = (props) => {

  const {
value: firstName,
hasError: firstNameError,
isValid: firstNameIsValid,
valueHandler: firstNameHandler,
inputBlurHandler: firstNameBlurHandler,
reset: resetFirstName
  } = useInput(value => value.trim() !== '');


  const {
    value: lastName,
    hasError: lastNameError,
    isValid: lastNameIsValid,
    valueHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
      } = useInput(value => value.trim() !== '');


      const {
        value: email,
        hasError: emailError,
        isValid: emailIsValid,
        valueHandler: emailHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
          } = useInput(value => 
            (value.trim() !== '') && (value.includes("@")));


  let formIsValid = false;

if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  formIsValid = true;
}

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid){
return
    }
    console.log("SUBMITTED")
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='firstname'>First Name</label>
          <input value={firstName} 
          onBlur={firstNameBlurHandler} 
          onChange={firstNameHandler} 
          type='text' 
          id='firstname' />
          {firstNameError ? <p>PLEASE ENTER VALID FIRST NAME</p> : ""}
        </div>


        <div className='form-control'>
          <label htmlFor='lastname'>Last Name</label>
          <input 
          value={lastName} 
          onBlur={lastNameBlurHandler} 
          onChange={lastNameHandler} 
          type='text' id='lastname' />
                 {lastNameError ? <p>PLEASE ENTER VALID LAST NAME</p> : ""}
        </div>
      </div>


      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
        type='text' 
        id='email'
        value={email} 
        onBlur={emailBlurHandler} 
        onChange={emailHandler}  />
               {emailError ? <p>PLEASE ENTER VALID EMAIL</p> : ""}
      </div>


      <div className='form-actions'>
        <button 
        disabled={!formIsValid}
        onSubmit={submitHandler} >Submit</button>
      </div>


    </form>
  );
};

export default BasicForm;
