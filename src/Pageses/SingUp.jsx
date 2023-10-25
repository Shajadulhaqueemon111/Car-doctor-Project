import React, { useContext } from 'react';
import img from '../../src/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const SingUp = () => {

    const{userSingUP}=useContext(AuthContext)
    const handelSingUp=(e)=>{
        e.preventDefault()
        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        if (password.length < 6) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password should be at least 6 characters long!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }else{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        const user={
            name,email,password
        }

        console.log(user)

        userSingUP(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
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
      <form onSubmit={handelSingUp} className="card-body">
      <h1 className="text-3xl text-center font-bold">Sing-Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Sing-Up</button>
        </div>
      </form>
      <p className='text-center mb-5'>Already Have an Account? <Link className='text-red-500' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SingUp;