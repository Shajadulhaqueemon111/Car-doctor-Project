import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import BooksCard from './BooksCard';
import Swal from 'sweetalert2';
import axios from 'axios';

const Bookings = () => {
    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])
    const url = (` https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/bookings?email=${user?.email}`)

    useEffect(() => {

      axios.get(url,{withCredentials:true})
      .then(res=>{
        setBookings(res.data)
      })
        // fetch(url,{withCredentials:true})
        //     .then(res => res.json())
        //     .then(data => setBookings(data)

        //     )
    }, [])
    const handelDelete=(id)=>{
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(` https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/bookings/${id}`,{
                  method:"DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data)
                  if(data. deletedCount>0){
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                        const remaining=bookings.filter(booking=>booking._id !== id)
                        setBookings(remaining)

                  }
              })
          
          }
        })
  }
    const handelConfirm=(id)=>{
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Confirm it!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(` https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/bookings/${id}`,{
                  method:"PATCH",
                  headers:{
                    "Content-Type":"application/json"

                  },
                  body:JSON.stringify({status:"confirm"})
              })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data)
                  if(data.  modifiedCount){
                      Swal.fire(
                          'Confirm!',
                          'Your Booking updated has been successfully.',
                          'success'
                        )
                        const remaining=bookings.filter(booking=>booking._id !== id)
                        const updated=bookings.find(booking=>booking._id===id)
                        updated.status='confirm'
                        const newBooking=[updated,...remaining]
                        setBookings(newBooking)

                  }
              })
          
          }
        })
  }
    return (
        <div>
            <h2>My Bookings:{bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full border-collapse border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="py-2">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
         
        <th className="py-2 text-blue-500">Image</th>
        <th className="py-2 text-blue-500">Name</th>
        <th className="py-2 text-green-500">service</th>
        <th className="py-2 text-green-500">DAte</th>
        <th className="py-2">Gmail</th>
        <th className="py-2">Price</th>
        </th>
      </tr>
    
    </thead>
    <tbody>
      {bookings?.map((booking) =><BooksCard key={booking._id}
      handelDelete={handelDelete}
      handelConfirm={handelConfirm}
      booking={booking}></BooksCard>
       
      )}
    </tbody>
  </table>
</div>


        </div>
    );
};

export default Bookings;