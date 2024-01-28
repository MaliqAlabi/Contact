import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({name:name, email:email, id:users[users.length - 1].id + 1}))
        navigate('/')

    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder='enter name' name='name' onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='enter email' name='email' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}