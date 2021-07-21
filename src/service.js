import axios from "axios";


export function getAllskills(successCB, errorCB) {
    axios.get(process.env.REACT_APP_SKILLS_URL)
    .then(successCB)
    .catch(errorCB)
}