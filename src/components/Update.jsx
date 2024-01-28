import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./userSlice";

export default function Update(){

    const users = useSelector((state) => state.users)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filteredData = users.filter((result) => result.id == id)
    const newData = filteredData[0]

    const [name,setName] = useState(newData.name)
    const [email,setEmail] = useState(newData.email)

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({name,email,id}))
        navigate('/')
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder='enter name' name='name' onChange={e => setName(e.target.value)} value={name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='enter email' name='email' onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}