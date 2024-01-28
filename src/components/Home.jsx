import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./userSlice";

export default function Home() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    
    const handleDelete = (id) => {
        dispatch(deleteUser({id:id}))
    }
    return (
        <div className="container">
            <h2>Contact App with redux</h2>
            <Link to='/create' className="btn btn-success my-3">Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={index}> 
                            <td>-</td>           
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to = {`/edit/${user.id}`} className="btn btn-sm btn-primary me-3 mt-2 mb-2">Edit</Link>
                                <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger mt-2 mb-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}