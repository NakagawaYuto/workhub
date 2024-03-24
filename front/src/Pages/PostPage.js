import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:8080/post/"

function Postpage(){
    const[posts, setPosts] = useState()
    const {user_id } = useParams();
    const[title, setTitle] = useState('');
    const[hostname, setHostname] = useState('');
    const[deadline, setDeadline] = useState('');
    const[date_and_location, setDate_and_location] = useState('');
    const[num_of_people, setNum_of_people] = useState('');
    const[estimated_time, setEstimated_time] = useState('');
    const[target, setTarget] = useState('');
    const[tag, setTag] = useState('');
    const[body, setBody] = useState('');
    const[data_added, setData_added] = useState('');
    const Post = async () => {
        const titleOk = title.length != 0
        const hostnameOk = hostname.length != 0
        const deadlineOk = deadline.length != 0
        const date_and_locationOk = date_and_location.length != 0
        const num_of_peopleOk = num_of_people.length != 0
        const estimated_timeOk =  estimated_time.length != 0
        const targetOk = target != 0
        const tagOk = tag.length != 0
        const bodyOk = body.length != 0
        const data_addedOk = data_added.length != 0
        if(titleOk && hostnameOk && deadlineOk && date_and_locationOk && num_of_peopleOk && estimated_timeOk && targetOk && tagOk && bodyOk && data_addedOk) {
            await axios.post(baseURL,{
                title: String(title),
                hostname: String(hostname),
                deadline: String(deadline),
                date_and_location: Text(date_and_location),
                num_of_people: String(num_of_people),
                estimated_time: String(estimated_time),
                target: Text(target),
                tag: Text(tag),
                body: Text(body),
                data_added: Date(data_added)
            })
            .then(() => {
                setTitle('');
                setHostname('')
                setDeadline('')
                setDate_and_location('')
                setNum_of_people('')
                setEstimated_time('')
                setTarget('')
                setTag('')
                setBody('')
                setData_added('')
            })
        }
    }
    
    // useEffect(() => {
    //     axios.get()
    //     .then(response => {
    //         setPosts(response.data);
    //         // console.log(response.data)
    //     })
    //     .catch(error => {
    //         console.error('error',error);
    //     });
    // }, []);

    




    

    return (
        <>
        <Box>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "タイトル"
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "投稿する人の名前"
                    onChange={(e)=>{setHostname(e.target.value)}}
                />
                
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "募集期間"
                    onChange={(e)=>{setDeadline(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "日時・場所"
                    onChange={(e)=>{setDate_and_location(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "人数"
                    onChange={(e)=>{setNum_of_people(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "見込み労働時間"
                    onChange={(e)=>{setEstimated_time(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "対象者"
                    onChange={(e)=>{setTarget(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "タグ"
                    onChange={(e)=>{setTag(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "内容"
                    onChange={(e)=>{setBody(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <Button
                variant="contained"
                onClick={() => {
                    Post();
                }}
                >保存</Button>
            </Grid>
        </Box>
        </>
    )
}
export default Postpage