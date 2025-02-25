
import React from "react";
import "./Tour.css";

const Tours = ({ tours, handleDelete }) => {
    return (
        <div className="tourlist">
            {tours.map((tour) => (
                <div className="tourCard" key={tour.id}>
                    <img src={tour.image} alt={tour.country + " tour image"} />
                    <h3>{tour.country}</h3>
                    <h3 className="price">₹{tour.price}</h3>
                    <p><strong>Transport:</strong> {tour.transport}</p>
                    <p><strong>Persons:</strong> {tour.persons}</p>
                    <button className="not-interested" onClick={() => handleDelete(tour.id)}>Not Interested</button>
                </div>
            ))}
        </div>
    );
};

export default Tours;
