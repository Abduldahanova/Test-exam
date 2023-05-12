import './styles/loader.css';

import React from 'react';
import { useEffect, useState } from "react"


const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.75) resolve(fetch(url))
    else reject(new Error('Error'))
  }, 2000)
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
    <div class="loader-container">
    <div class="loader book">
      <figure class="page"></figure>
      <figure class="page"></figure>
      <figure class="page"></figure>  
    </div>
    <h4>Loading</h4>
  </div>
  )
}
export default Loading