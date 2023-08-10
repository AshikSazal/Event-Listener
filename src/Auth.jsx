import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const authHandler = () =>{
    setIsLoggedIn(prev => !prev);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(isLoggedIn){
      const response = await fetch('http://127.0.0.1:8000/register',
        {
          method:'POST',
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        }
      );
      const responseData = response.json();
      console.log(responseData);
    }else{
      const response = await fetch('http://127.0.0.1:8000/register',
        {
          method:'POST',
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        }
      );
      const responseData = response.json();
      console.log(responseData);
    }
    // It will replace the auth url
    navigate('/dashboard', { replace: true})

  }

  const onChangeHandler = (e) =>{
    const { name, value } = e.target;
    setFormData(prev =>({
      ...prev,
      [name] : value
    }))
  }
  
  return (
    <div className="center-text">
      <div className="m-auto bg-gray-200 p-8 rounded-lg shadow-md w-60 md:w-2/4 lg:w-1/3">
        <div className="flex justify-center">
          <h1 className="text-yellow-700 text-2xl mb-4 font-bold">
            Registration Page
          </h1>
        </div>
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          {isLoggedIn && 
          <div>
          <input type="text" name="name" className="input-text" placeholder="Name" onChange={onChangeHandler} value={formData.name}/>
        </div>}
          <div>
            <input type="email" name="email" className="input-text" placeholder="E-mail" onChange={onChangeHandler} value={formData.email}/>
          </div>
          <div>
            <input
              type="password"
              className="input-text"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="button-submit"
            >
              Submit
            </button>

          </div>
        </form>
        <p className="text-gray-600 mt-4">
           {isLoggedIn ? 'Already' : 'Don\'t'} have an account? <button className="text-blue-500 hover:text-blue-600 hover:underline" onClick={authHandler}>Click here to {isLoggedIn ? 'Log in' : 'Sign up'}</button>
         </p>
      </div>
    </div>
  );
};

export default Auth;
