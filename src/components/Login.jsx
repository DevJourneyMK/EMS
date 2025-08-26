import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const formHandler=(e)=>{
    e.preventDefault()
    console.log("Email is", email)
    console.log("pass is ", password)
    setEmail("")
    setPassword("")

  }



  return (
    <>
     <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
  <div className="border border-gray-300 shadow-lg p-8 rounded-xl bg-white w-80">
    <h1 className="font-bold text-2xl mb-6 text-center text-gray-700">
      Welcome Back
    </h1>
    <form onSubmit={formHandler} className="flex flex-col items-center justify-center space-y-4">
      <input
        value={email} onChange={(e)=>setEmail(e.target.value)}
        type="email"
        placeholder="Enter Your Email"
        className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        value={password} onChange={(e)=>setPassword(e.target.value)}
        type="password"
        placeholder="Enter Your Password"
        className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="font-bold bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200 hover:cursor-pointer">
        Login
      </button>
    </form>
  </div>
</div>

    
    
    </>
  )
}

export default Login