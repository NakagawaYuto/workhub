import React, { Component } from "react"

export default class EditForm extends Component{
    constructor(props){
        this.state = {
            title: "",
            hostname: "",
            deadline: "",
            date_and_location: "",
            num_of_people: "",
            estimated_time: "",
            target: "",
            tag: "",
            body: "",
            editing: true,
        }
        this.handleEditing = this.handleEditing.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        render () {
            const { editing } = this.state
            return (
                <div>
                    <h1>編集</h1>
                    <form>
                        {editing ( //?が入る
                            <div>
                            <input
                            onChange={(e)=>{
                                this.setState({title: e.target.value})
                            }}
                            type="text"
                            value={this.state.title}
                            placeholder="タイトル"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({hostname: e.target.value})
                            }}
                            type="text"
                            value={this.state.hostname}
                            placeholder="投稿する人の名前"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({deadline: e.target.value})
                            }}
                            type="datetime-local"
                            value={this.state.deadline}
                            placeholder="募集期間"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({date_and_location: e.target.value})
                            }}
                            type="text"
                            value={this.state.date_and_location}
                            placeholder="日時・場所"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({num_of_people: e.target.value})
                            }}
                            type="number"
                            value={this.state.num_of_people}
                            placeholder="人数"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({estimated_time: e.target.value})
                            }}
                            type="number"
                            value={this.state.estimated_time}
                            placeholder="見込み労働時間"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({target: e.target.value})
                            }}
                            type="text"
                            value={this.state.target}
                            placeholder="対象者"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({tag: e.target.value})
                            }}
                            type="text"
                            value={this.state.tag}
                            placeholder="タグ"
                            />
                            <input
                            onChange={(e)=>{
                                this.setState({body: e.target.value})
                            }}
                            type="text"
                            value={this.state.body}
                            placeholder="内容"
                            />
    
                            <button onClick={this.handleSubmit}>保存</button>
                        </div>
                        )}
                    </form>
                </div>
            )
        }
        handleEditing(e) {
            e.preventDefault()
            this.setState({
                editing: !this.state.editing
            })
        }
        handleSubmit(e){
            e.preventDefault()
            if (!this.state.title) return;
            this.setState({
                title: this.state.title,
                hostname: this.state.hostname,
                deadline: this.state.deadline,
                date_and_location:this.state.date_and_location,
                num_of_people: this.state.num_of_people,
                estimated_time: this.state.estimated_people,
                target: this.state.target,
                tag: this.state.tag,
                body: this.state.body,
            }
            )
        }
}