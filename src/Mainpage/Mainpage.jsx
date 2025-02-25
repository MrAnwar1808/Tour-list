
import { useState } from 'react';
import Loading from '../Loadingpage/Loadingpage';
import Tours from '../Tour/Tour';
import "./main.css";


const tourData = [
  { id: 1, country: "Hyderabad", price: 450, transport: "Bus", persons: 2, image: "/images/hyd.jpeg" },
  { id: 2, country: "Delhi", price: 2200, transport: "Train", persons: 4, image: "/images/delhi.jpeg" },
  { id: 3, country: "Japan", price: 18000, transport: "flight", persons: 3, image: "/images/japan.jpeg" },
];

function Mainpage() {
  const [tours, setTours] = useState(tourData);
  const [loading, setLoading] = useState(false);


  const handleDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="tour-container">
      <h1 className="title">Our Tours</h1>
     
      {loading ? <Loading /> : <Tours tours={tours} handleDelete={handleDelete} />}
      {tours.length === 0 && <button className="refresh" onClick={() => setTours(tourData)}>Refresh</button>}
    </div>
  );
}

export default Mainpage;
