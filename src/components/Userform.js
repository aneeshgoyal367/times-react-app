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
import Message from "./Message";


import { useState } from "react"


export default function Userform() {//stateful
    const [userform, setUserform] = useState({
        firstname: "Aneesh",
        age: 20


    }); //hook -function
    const [message, setMessage] = useState({ type: '', text: "" });

    const handleEvent = function (event) {
        console.log(event);
        setUserform({ ...userform, [event.target.name]: event.target.value })
    }

    const save = function (event) {
        console.log(userform);
        const promise = axios.post(process.env.REACT_APP_SERVER_URL, userform);
        promise.then(function (response) {
            console.log(response);;
            setMessage({ ...message, type: 'success', text: "User record was saved" })
        });
        promise.catch(function (error) {
            setMessage({ ...message, type: 'error', text: "User record was not saved" })
        })
    }
    const handleSelection = function (event) {
        //console.log(event.target.value);
        setUserform({ ...userform, [event.target.name]: event.target.value })

    }
    return (//JSX
        <div>
            <h3>Create User</h3>
            <Message message={message}></Message>

            <div className="form-group">

                <input placeholder='First Name' className="form-control" name='firstname' value={userform.firstname} onChange={handleEvent}></input>
            </div>
            <input placeholder='Age' className="form-control" type='number' name='age' value=
                {userform.age} onChange={handleEvent}></input>
            <label htmlFor="joiningDate">Joining Date:</label>
            <div className="form-group">
                <input type='date' className="form-control" name='joining date' value=
                    {userform.joiningDate} onChange={handleEvent}></input>
            </div>
            <select value='default' className='dropdown' name='skill' onChange={handleSelection} >
                <option >Select the skill</option>
                <option value='HTML'>HTML</option>
                <option value='React'>CSS</option>
                <option value='Javascript'>JAVASCRIPT</option>
            </select>
            <Button className="form-control" onClick={save}>Save</Button>
        </div>
    )

}