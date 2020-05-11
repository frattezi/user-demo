import React from 'react'
import { useForm } from "react-hook-form"

import Navbar from "app/components/NavBar"

const Home = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data);
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register({ required: true })}/>
        {errors.name && <span>This field is required</span>}
    
        <input name="password" ref={register({ required: true })} />
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
  </>
  )
}

export default Home
