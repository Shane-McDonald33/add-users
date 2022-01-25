import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            alert("Please Enter Your Name And Age");
            return;
        }
        console.log(enteredUserAge, enteredUserName);
        setEnteredUserAge('');
        setEnteredUserName('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    };

    return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input id="userName" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor="agee">Age</label>
        <input id="age" type="text" value={enteredUserAge} onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    )
};

export default AddUser;