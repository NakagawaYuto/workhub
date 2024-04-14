import * as React from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const baseURL = "http://127.0.0.1:8080/post/"

const Postpage=() => {
    const[title, setTitle] = React.useState('a');
    const[hostname, setHostname] = React.useState('a');
    const[deadline, setDeadline] = React.useState('2024-03-23T03:40:01.891007Z');
    const[date_and_location, setDate_and_location] = React.useState('a');
    const[num_of_people, setNum_of_people] = React.useState('7');
    const[estimated_time, setEstimated_time] = React.useState('7');
    const[target, setTarget] = React.useState('a');
    const[tag, setTag] = React.useState('a');
    const[body, setBody] = React.useState('a');
    const[data_added, setData_added] = React.useState('2024-03-22');
    const Post = async () => {
        // console.log('post')
        const titleOk = title.length !== 0;
        const hostnameOk = hostname.length !== 0;
        const deadlineOk = deadline.length !== 0;
        const date_and_locationOk = date_and_location.length !== 0;
        const num_of_peopleOk = num_of_people.length !== 0;
        const estimated_timeOk =  estimated_time.length !== 0;
        const targetOk = target !== 0;
        const tagOk = tag.length !== 0;
        const bodyOk = body.length !== 0;
        const data_addedOk = data_added.length !== 0;
        if(titleOk && hostnameOk && deadlineOk && date_and_locationOk && num_of_peopleOk && estimated_timeOk && targetOk && tagOk && bodyOk && data_addedOk) {
            await axios.post(baseURL,{
                title: String(title),
                hostname: String(hostname),
                deadline: String(deadline),
                date_and_location: String(date_and_location),
                num_of_people: Number(num_of_people),
                estimated_time: Number(estimated_time),
                target: String(target),
                tag: String(tag),
                body: String(body),
                data_added: String(data_added)
            })
            .then(() => {
                setTitle('');
                setHostname('');
                setDeadline('');
                setDate_and_location('');
                setNum_of_people('');
                setEstimated_time('');
                setTarget('');
                setTag('');
                setBody('');
                setData_added('');
            })
        }
    }
    // const test = () => {console.log('test')}
    
    
    return (
        <>
        <Box>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "タイトル"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "投稿する人の名前"
                    value={hostname}
                    onChange={(e)=>{setHostname(e.target.value)}}
                />
                
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "募集期間"
                    value={deadline}
                    onChange={(e)=>{setDeadline(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "日時・場所"
                    value={date_and_location}
                    onChange={(e)=>{setDate_and_location(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "人数"
                    value={num_of_people}
                    onChange={(e)=>{setNum_of_people(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "見込み労働時間"
                    value={estimated_time}
                    onChange={(e)=>{setEstimated_time(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "対象者"
                    value={target}
                    onChange={(e)=>{setTarget(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "タグ"
                    value={tag}
                    onChange={(e)=>{setTag(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                    id= "outlined-multiline-flexible"
                    label = "内容"
                    value={body}
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