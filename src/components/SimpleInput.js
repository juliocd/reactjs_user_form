import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { 
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
    } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
    } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName, enteredEmail)

    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          onBlur={nameInputBlurHandler} // Focus
          type='text' 
          value={enteredName} 
          id='name' 
          onChange={nameInputChangeHandler}/>
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input 
          onBlur={emailInputBlurHandler} // Focus
          type='email' 
          value={enteredEmail} 
          id='email' 
          onChange={emailInputChangeHandler}/>
        {emailInputHasError && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
