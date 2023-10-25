import React from 'react';

const BooksCard = ({booking}) => {

    const {customerName,email,img,service,date,price}=booking
    return (
        <div>
              <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className=" w-24 rounded h-24">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                              {service}
                            </td>
                            <td>{email}</td>
                            <td>${price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                      
        </div>
    );
};

export default BooksCard;