import {useState} from 'react';

const useInput  = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);


const valueIsValid = validateFunction(enteredValue);

//has error is value is not valid and it is touched.
const hasError = !valueIsValid && isTouched;


//update the enteredName state when user inputs
const valueHandler = event => {
    setEnteredValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

return(
    {value: enteredValue,
    hasError,
    isValid: valueIsValid,
valueHandler,
inputBlurHandler,
reset}

)

}

export default useInput