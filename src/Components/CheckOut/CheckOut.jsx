import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { title, _id, price,img } = service

    const handelBookService = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        const price = e.target.price.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id:_id,
            price: price,

        }

        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Order has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <h2 className='text-center font-bold text-2xl'>Book services:{service.title} </h2>

            <form onSubmit={handelBookService} className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' placeholder="date" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due amount</span>
                    </label>
                    <input type="text" name='price' defaultValue={price} className="input input-bordered" required />

                </div>
                <div className="form-control w-full  mt-6">
                
                    <input className='btn   btn-secondary ' type="submit" value="order Conform" id="" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;