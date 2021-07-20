//import { useState } from "react"

//export default function Userform() {
   // const [userform, setUserform] = useState({
   //     firstname: "Aneesh",
   //     age: 20


  //  }); //hook -function
   // const handleEvent = function (event) {
   //     console.log(event);
   //     setUserform({ ...userform, firstname: event.target.value })
   // }
   // const handleEventForAge = function (event) {
    //    console.log(event);
    //    setUserform({ ...userform, age: event.target.value })
   // }
   // const save = function (event) {
   //     console.log(userform);
  //  }
   // return (
   //     <div>
    //        <h3>Create User</h3>

            //<input value={userform.firstname} onChange={handleEvent}></input>
     //       <input value={userform.age} onChange={handleEventForAge}></input>
      //      <button onClick={save}>Save</button>
      //  </div>
   // )
//}
import axios from "axios";
import { useState } from "react"

export default function Userform() {
    const [userform, setUserform] = useState({
        firstname: "Aneesh",
        age: 20


    }); //hook -function
    const handleEvent = function (event) {
        console.log(event);
        setUserform({ ...userform, [event.target.name]: event.target.value })
    }
    
    const save = function (event) {
        console.log(userform);
        const promise = axios.post("https://localhost:4200/users", userform);
        promise.then(function(response){
            console.log(response);
        });
    }
    return (//JSX
        <div>
            <h3>Create User</h3>
            <div className="form-group"></div>

            <input placeholder='First Name' name='firstname' value={userform.firstname} onChange={handleEvent}></input>
            <input placeholder='Age' type='number' name='age' value={userform.age} onChange={handleEvent}></input>
            joining date: <input type='date' name= 'joining date' value={userform.joining} onChange={handleEvent}></input>
            <button onClick={save}>Save</button>
        </div>
    )
}