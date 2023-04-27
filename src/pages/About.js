import React from 'react';
import { useEffect, useState } from "react"


const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.75) resolve(fetch(url))
    else reject(new Error('mock fetch failed'))
  }, 1500)
})

const About = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  useEffect(() => {
    setLoading(true)
    mockFetch('/events.json')
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
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        events.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))
      }
    </div>
  )
}
export default About;
