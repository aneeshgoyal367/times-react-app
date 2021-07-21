import axios from "axios";
import { Button } from "bootstrap";

import { useEffect, useState } from "react"
import Counter from "./Counter";


export default function Userlist(){
    const [users, setUsers] =  useState([]);
    //useEffect(function(){
        useEffect(() => {
            if (users.length !== 0) {
            return;
        }//infite loop me chale jayega ye nahi lagaya to
        console.log('called................');
        const promise = axios.get("http://localhost:4200/users");
        //promise.then(function(response){
         //   setUsers(response.data);
         //console.log(response.data);
       // })
       //props to share data from parent to child component
       promise.then(response => setUsers(response.data))
    })
    return(
        <div><Counter count={users.length}></Counter>
        <table className='table table-bordered table-hover table-responsive
        table-striped'>
            <thead>
                <tr><th>First name</th>
                <th>Age</th>
                <th>Joining Date</th>
                <th>Option</th></tr>
            </thead>
            <tbody>
               {users.map((user, index)=> <tr key={index}>
                   <td>{user.firstname}</td>
                   <td>{user.age}</td>
                   <td>{user.joiningDate}</td>
                   <td><button className='btn btn-danger'>Delete</button></td>
    </tr>)}
            </tbody>
        </table>
        </div>
    )
}