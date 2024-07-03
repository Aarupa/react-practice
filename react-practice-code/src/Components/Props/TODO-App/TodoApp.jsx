import { useState } from "react";


const TodoApp = () =>{

    const [todo ,setTodo] = useState([]);
    const [NewTodo ,setNewTodo] = useState('');
    const [popup, setpopup] = useState(false);
    const [edit ,setedit] = useState(null);

    const handleInput = (e) =>{
        setNewTodo(e.target.value);
    };

    const AddTOdo = () =>{
        if(NewTodo.trim() !== ''){
            const newTodoItem ={
                id: Date.now(),
                text:NewTodo,
                completed: false,
            };

            setTodo([...todo,newTodoItem]);
            setNewTodo("");
        }
    };

    const DeleteTodo = (id)=>{
        const updateTodo = todo.filter(todo=>todo.id !==id);
        setTodo(updateTodo);
    };

    const Complete = (id) =>{
        const updateTodo = todo.map(todo=>
            todo.id === id ? {...todo,completed : !todo.completed} : todo
        );
        setTodo(updateTodo);

        setpopup(true);

        setTimeout(() => {
            setpopup(false);
        }, 2000);
    };


    const Edit = () =>{
        setedit(todo);

        setNewTodo(todo.text);
    };

    const saveEdit = () =>{
        if(edit&& NewTodo.trim() !== ""){
            const updateTodo = tode.map((todo) => todo.id === edit.id ? {...todo, text : newTodoItem} : todo)
            setTodo(updateTodo);
            setNewTodo("");
            setedit(null);
        }
    };

    return(
        <>
            <h1>TODO App</h1>
            <div>
                <input type="text"
                value={NewTodo}
                onChange={handleInput} /> <br/>
                {edit ?
                    (<button onClick={saveEdit}>Save</button>) :
                    (<button onClick={AddTOdo}>Add Todo</button>)
                }
            </div>
            <ul>
                {
                    todo.map(todo => (
                        <li key={todo.id} className={todo.completed ? 'completed' :''}>
                            <span>{todo.text}</span>
                            <div>
                                <button onClick={() => Complete(todo.id)}>
                                    {todo.completed ? 'undo' :'completed'}
                                </button>
                                <button onClick={() => Edit(todo)}>Edit</button>
                                <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {popup && <div>Your task is completed</div>}
        </>
    )
}

export default TodoApp;