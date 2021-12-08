import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import loginservice from '../services/loginservice'

const ListUserComponent = () => {

    const [register, setUser] = useState([])

    useEffect(() => {

        getallUser();
    }, [])

    const getallUser = () => {
        loginservice.getallUser().then((response) => {
            setUser(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (userId) => {
       loginservice.deleteEmployee(userId).then((response) =>{
        getallUser();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> Registered Users </h2>
            <Link to = "/add-user" className = "btn btn-primary mb-2" > Add User </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> User Id </th>
                    <th> User First Name </th>
                    <th> User Last Name </th>
                    <th> User Email Id </th>
                    <th> User Password </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        register.map(
                            user =>
                            <tr key = {user.id}> 
                                <td>{user.id} </td>
                                <td> {user.firstName} </td>
                                <td>{user.lastName}</td>
                                <td>{user.emailId}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-user/${user.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent
