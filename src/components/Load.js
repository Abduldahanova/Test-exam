import './styles/style.css';

import React from 'react';
import { useEffect, useState } from "react"
import Load from "../components/images/gif/load.gif"


const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.75) resolve(fetch(url))
    else reject(new Error('Error'))
  }, 5500)
})

const Loading = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  useEffect(() => {
    setLoading(true)
    mockFetch()
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading && <div ><img  className='load' src={Load} alt="" /></div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}
export default Loading