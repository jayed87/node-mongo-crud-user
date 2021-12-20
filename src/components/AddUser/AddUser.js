import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    //handle new user
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email }
        fetch(('http://localhost:5000/users'), {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('data inserted');
                    e.target.reset();
                }
            })
        // nameRef.current.value = '';
        // emailRef.current.value = '';
        e.preventDefault();
    }
    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} name="" id="" />
                <input type="text" ref={emailRef} name="" id="" />
                <input type="submit" name="Add" id="" />
            </form>
        </div>
    );
};

export default AddUser;