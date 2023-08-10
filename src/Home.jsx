import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const onSubmit = () =>{
        navigate('/auth')
    }
  return (
    <div className='center-text'>
        <button
            type="submit"
            className="button-submit"
            onClick={onSubmit}
        >
            Sign In
        </button>
    </div>
  )
}

export default Home