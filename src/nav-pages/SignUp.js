import React from 'react';
import '../components/styles/login.css'
import

import { useState } from "react"

export const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:1717/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
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
    <form>
      <p>Эл. почта</p>
      <input
        type="text"
        name="username"
        placeholder="Ваше имя или адрес эл.почты"
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
      <button onClick={handleLogin}>
        Войти<Link to="/admin"></Link>
      </button>
    </form>
  )
}
export default SignUp;