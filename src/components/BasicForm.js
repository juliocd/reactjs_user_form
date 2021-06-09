import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.trim() !== '' && value.includes('@');

const BasicForm = () => {
  const { 
    value: firstNameValue, 
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput
    } = useInput(isNotEmpty);

  const { 
    value: lastNameValue, 
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
    } = useInput(isNotEmpty);

  const { 
    value: emailValue, 
    isValid: enteredEmailNameIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
    } = useInput(isEmail);

  let formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailNameIsValid;

  const submitHandler = event => {
    event.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            value={firstNameValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            type='text' 
            id='name' />
            {firstNameInputHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input 
            value={lastNameValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type='text' 
            id='last-name' />
            {lastNameInputHasError && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
          <label htmlFor='email'>Email</label>
          <input 
            value={emailValue}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            type='text' 
            id='email' />
            {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
        </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
