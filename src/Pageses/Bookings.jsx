import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import BooksCard from './BooksCard';

const Bookings = () => {
    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])
    const url = (`http://localhost:5000/bookings?email=${user?.email}`)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data)

            )
    }, [])
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
        </th>
        <th className="py-2 text-blue-500">Name</th>
        <th className="py-2 text-green-500">Job</th>
        <th className="py-2">Favorite Color</th>
        <th className="py-2"></th>
      </tr>
    </thead>
    <tbody>
      {bookings?.map((booking) =><BooksCard key={booking._id} booking={booking}></BooksCard>
       
      )}
    </tbody>
  </table>
</div>


        </div>
    );
};

export default Bookings;