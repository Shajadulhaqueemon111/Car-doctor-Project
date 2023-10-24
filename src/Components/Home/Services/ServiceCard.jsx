import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCard = ({ service }) => {
    const { img, price, title } = service

    const imageStyle = {
        width: '200px',
        height: '150px',
    };

    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 mb-4 shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={imageStyle} src={img} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn font-bold text-xl text-pink-400"><AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;