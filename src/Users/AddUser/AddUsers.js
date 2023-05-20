import React, { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../UI/Wrapper/Wrapper";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  // const [enetredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // const [enterCollege, setEnteredCollege] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredNameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;
    const enteredCollegeRef = collegeInputRef.current.value;

    if (
      enteredNameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please eneter a valid name and age (non-Empty values)",
      });
      return;
    }
    if (+enteredAgeRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please eneter a valid  age (>0)",
      });
      return;
    }
    const userData = {
      name: enteredNameRef,
      age: enteredAgeRef,
      college: enteredCollegeRef,
      id: Math.random().toString(),
    };
    props.onSave(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
    // setEnteredUserName("");
    // setEnteredAge("");
    // setEnteredCollege("");
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  // const collegeNameChangeHandler = (event) => {
  //   setEnteredCollege(event.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
            // value={enetredUserName}
            // onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            ref={collegeInputRef}
            // value={enterCollege}
            // onChange={collegeNameChangeHandler}
          />
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
