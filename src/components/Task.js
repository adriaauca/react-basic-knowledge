import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {

    StyleCompleted(){

        return {

            fontSize: '20px',
            color: this.props.task.done ? 'grey' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {

        const {task} = this.props;

        return <p style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            
            <input type="checkbox"/>
            <button style={btnDelete}>
                x
            </button>
        </p>
    }
}

Task.propTypes = {

    task: PropTypes.object.isRequired
}

const btnDelete = {

    fontSize: '18px',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;