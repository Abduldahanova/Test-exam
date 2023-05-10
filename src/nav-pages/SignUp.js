import React, { useState } from 'react';
import '../components/styles/login.css'
import './Admin.jsx'
import { useNavigate } from 'react-router';

export const SignUp = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    let newErrors = { username: '', password: '' }
    if (!username) {
      newErrors.username = 'Введите логин'
    }
    if (!password) {
      newErrors.password = 'Введите пароль'
    }
    setErrors(newErrors)

    if (!newErrors.username && !newErrors.password) {
      fetch('http://16.16.149.51/auth_token/', {
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
        .then(()=> navigate("/Profile/admin"))
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="input-container">
        <p className='subtitle'>Логин</p>
        <input
          type="text"
          name="username"
          placeholder="Ваш логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div className="input-container">
        <p className='subtitle'>Пароль</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
          <button className='show-btn' type="button" onClick={toggleShowPassword}>
            {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          </button>
      <button className='profile-btn'>Войти</button>
    </form>
  )
}

export default SignUp;
