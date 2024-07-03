import { useState } from "react";

function LoginForm(){

    const [user,setUser] = useState('');
    const [pass,setpass] = useState('');
    const [error,setError] = useState('');

    const handleSubit = (event) => {
        event.preventDefault();
        if(user === '' || pass === ''){
            setError('both feild are required');
        }
        else{
            setError('');
        }
    }

    return(
            <form onSubmit={handleSubit}>
                <div>
                <label htmlFor="user">Username</label>
                <input type="text"
                placeholder="enter username" 
                value={user}
                onChange={(e) => setUser(e.target.value)}/> <br/>
                <label htmlFor="user">Password</label>
                <input type="password"
                placeholder="enter password" 
                value={pass}
                onChange={(e) => setpass(e.target.value)}/>
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
    )
}

export default LoginForm;