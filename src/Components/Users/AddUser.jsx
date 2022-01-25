import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message: 'Please Enter A Valid Name and Age'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        setEnteredUserAge('');
        setEnteredUserName('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input id="userName" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor="agee">Age</label>
        <input id="age" type="text" value={enteredUserAge} onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
    )
};

export default AddUser;