import React, { useState, useEffect } from 'react'
import axios from 'axios';
 
const baseURL = "http://localhost:8080/post/"

const EditForm = () => {
    const navigate = useNavigate();
    const {user_id} = useParams();
    const[posts,Seposts] = useState();
    const[title, setTitle] = useState();
    const[hostname,setHostname] = useState();
    const[deadline, setDeadline] = useState();
    const[date_and_location, setDate_and_location] = useState();
    const[num_of_people, setNum_of_people] = useState();
    const[estimated_people, setEstimated_people] = useState();
    const[target, setTarget] = useState();
    const[tag, setTag] = useState();
    const[body, setBody] = useState();
    const[data_added, setData_added] = useState();
    const[users, setUsers] = useState();
}

React.useEffect(() => {
    axios.get(baseURL).then((response) =>{
        const {title, hostname, deadline,date_and_location, num_of_people, estimated_people, target,tag,body,data_added} = response.date;
        setTitle(title)
        setHostname(hostname)
        setDeadline(deadline)
        setDate_and_location(date_and_location)
        setNum_of_people(num_of_people)
        setEstimated_people(estimated_people)
        setTarget(target)
        setTag(tag)
        setBody(body)
        setData_added(data_added)
    });


},[]);
if(!users) return null;

const user = users.find(user => user.id === parseInt(user_id));

const updatePost = () => {
    axios.patch(baseURL,{
        title: String(title),
        hostname: String(hostname),
        deadline: String(deadline),
        date_and_location: String(date_and_location),
        num_of_people: String(num_of_people),
        estimated_people: String(estimated_people),
        target: String(target),
        tag: String(tag),
        body: String(body),
        data_added: String(data_added)
    })
    .then(() => {
        setTitle('')
        setHostname('')
        setDeadline('')
        setDate_and_location('')
        setNum_of_people('')
        setEstimated_people('')
        setTarget('')
        setTag('')
        setBody('')
        setData_added('')
    })
}