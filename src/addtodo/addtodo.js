import React from 'react';

class AddTodolist extends React.Component {


    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    render() {
        return (
            <div className='addtodo'>
                <form onSubmit={(e) => this.submittodo(e)}>
                    <input id='Addtodoinput' onChange={(e) => this.updateInput(e)} type='text' ></input>
                    <button type='submit'>ADD</button>
                </form>

            </div>
        )
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value });
    };

    submittodo = (e) => {
        e.preventDefault();
        console.log('tt', this.state);
        this.props.BtnaddTodo(this.state.todo);
        document.getElementById('Addtodoinput').value = '';
    };



}

export default AddTodolist;