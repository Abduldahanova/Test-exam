import { useState } from "react";


const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:1717/login', {
        method: 'POST',
        body: JSON.stringify({ username , password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        localStorage.setItem('token', data.token)
    })
}
    return (
        <div className="container-input">            
        <form>
            <p>Логин</p>
            <input 
            type="text"
            name="username"
            placeholder="Ваш логин" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <p>Пароль</p>
            <input
            type="password"
            name="password"
            placeholder="Ваш пароль" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}
            >Log in
            </button>
        </form>
        </div>
    )
}
export default LoginPage