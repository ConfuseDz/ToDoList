import React from 'react';
import '../style.css';

class Todoitem extends React.Component {

    render() {

        const { todo } = this.props;
        return (
            <div className={'itemlist', (todo.completed ? ' completed' : '')} onClick={this.toggletodo}>
                {todo.text}
            </div>
        )
    }

    toggletodo = () => {
        this.props.Btnupdatetodo(this.props.todo);
    }
}

export default Todoitem;