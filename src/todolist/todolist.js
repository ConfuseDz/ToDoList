import React from 'react';
import Todoitem from '../todoitem/todoitem';


class Todolist extends React.Component {

    render() {

        const { todos } = this.props;

        return (
            <div className='todolist'>
                {
                    todos.map((_todo, _index) => {
                        return (
                            <Todoitem Btnupdatetodo={this.updatetodo} key={_index} todo={_todo}></Todoitem>
                        )
                    })
                }
            </div>
        );
    }

    updatetodo = (todo) => {
        this.props.Btnupdatetodo(todo);
    }

}

export default Todolist;