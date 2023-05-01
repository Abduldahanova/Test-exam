import { forwardRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const SignUpPage = forwardRef((props, ref) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    
    fetch('http://localhost:1717/me', {
      headers: {
        'X-Auth': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUser(data)
      })
  }, [])

  return (
    <div className="wrapp" ref={ref}>
      <form>
        <div>username</div>
        
        <div>
            {
                user
                ? (
                    <>
                <div>{user.username}</div>
                <button onClick={() => localStorage.removeItem('token')}>Log out</button>
                    </>
                )
                : (
                    <Link to ="/auth/login">Go to Link </Link>
                )
            }
        </div>
        
      </form>
    </div>
  )
})
export default SignUpPage