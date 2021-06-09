import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value); // The entered value is not updated inmediatly
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value); // The entered value is not updated inmediatly
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName, enteredEmail)

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

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
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input 
          onBlur={emailInputBlurHandler} // Focus
          type='email' 
          value={enteredEmail} 
          id='email' 
          onChange={emailInputChangeHandler}/>
        {emailInputIsInvalid && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
