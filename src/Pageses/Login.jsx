import React, { useContext } from 'react';
import img from '../../src/assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import axios from 'axios';
const Login = () => {

  const { userSingIn, user } = useContext(AuthContext)
  const location = useLocation()
  console.log(location)

  const navigate = useNavigate()
  const handelLogin = (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = {
      email, password
    }

    console.log(user)

    userSingIn(email, password)
      .then(res => {
        const logedInUser = (res.user)
        console.log(logedInUser)
        const user = { email }


        axios.post(' https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/jwt', user,{withCredentials:true})
          .then(res => {
            console.log(res.data)
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/')

            }
          })
      })
      .catch(error => {
        console.log(error)
      })

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mr-12  w-1/2">

          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center mb-5'>New to car doctor? <Link className='text-red-500' to='/singup'>Sing-Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;