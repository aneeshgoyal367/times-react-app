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
import Button from 'react-bootstrap/Button';


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
        const promise = axios.post("http://localhost:4200/users", userform);
        promise.then(function (response) {
            console.log(response);
        });
    }
    const handleSelection = function(event){
        //console.log(event.target.value);
        setUserform({...userform, [event.target.name]:event.target.value })

    }
    return (//JSX
        <div>
            <h3>Create User</h3>
            <div className="form-group"></div>

            <input placeholder='First Name' className="form-control" name='firstname' value={userform.firstname} onChange={handleEvent}></input>
            <input placeholder='Age' className="form-control" type='number' name='age' value=
            {userform.age} onChange={handleEvent}></input>
            <label htmlfor="joiningDate">Joining Date:</label>
            <div className="form-group">
                <input type='date' className="form-control" name='joining date' value=
                    {userform.joiningDate} onChange={handleEvent}></input>
            </div>
            <select name='skill' onChange={handleSelection} >
                <option selected>Select the skill</option>
                <option value='HTML'>HTML</option>
                <option value='React'>CSS</option>
                <option value='Javascript'>JAVASCRIPT</option>
            </select>
            <Button className="form-control" onClick={save}>Save</Button>
        </div>
    )
    
}