import React, {useState} from "react";
import Button from '../../UI/Button/Button';

// import './CourseInput.css';
import styled from "styled-components";

const FormControl = styled.div`
     
      margin: 0.5rem 0;
    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color:${(props) => (props.invalid ? "red" : "black")}
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
      background:${(props) =>
        props.invalid ? "#ffd7d7" : "transparent"};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

  `;
  // in order to use media for the mobile devices then we need to just place it as below in the styled component
  // `@media(min-width:550px){<put styling here >}
  // how to use media in the JSX styled components syntax
const CourseInput = (props) => 
{


    const [isValid,setIsValid] = useState(true);
    const [enteredValue, setEnteredValue] = useState('');

    const changeHandler =(event) =>{
            if (event.target.value.trim().length > 0)
            setIsValid(true);
            setEnteredValue(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredValue.trim().length === 0 ){
            setIsValid(false);
            return;
        }
        props.addGoal(enteredValue);
        setEnteredValue('');
    }

    return (
      <form onSubmit={submitHandler}>
        <FormControl invalid ={!isValid} >
          <label>Course Goal</label>
          <input
            type="text"
            onChange={changeHandler}
            value={enteredValue}
            placeholder="Enter The Goal"
          />
        </FormControl>
        <Button>Add Goal</Button>
      </form>
    );

}

export default CourseInput;

// npm install --save styled-components for installing the styled components in the node module 
// 