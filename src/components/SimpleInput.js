import {useRef, useState, useEffect} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('>>>')
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value); // The entered value is not updated inmediatly

    if(event.target.value.trim() !== ''){
      setEnteredNameIsValid(true);
      return;
    }
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANUPULATE THE DOM
    setEnteredName('');
    setEnteredNameIsValid(true);
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          onBlur={nameInputBlurHandler} // Focus
          type='text' 
          value={enteredName} 
          id='name' 
          onChange={nameInputChangeHandler}/>
        {nameInputIsInvalid && <p className='error-text'>Name must be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
