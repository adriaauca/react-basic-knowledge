import React from 'react';

export default class TaskForm extends React.Component {

    state = {

        title: '',
        description: ''
    }

    onSubmit = element => {

        console.log(this.state)
        element.preventDefault();
    }

    onChange = element => {

        this.setState({[element.target.name]: element.target.value});
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a Task" 
                    onChange={this.onChange} 
                    value={this.state.title} 
                />
                <br/><br/>
                <textarea 
                    placeholder="Write a Description" 
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description} >
                 </textarea>
                <br/><br/>
                <input type="submit" />
            </form>
        )
    }
}