import { useEffect, useState } from "react";

const SingleService = () => {
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("https://car-doctor-backend-umber.vercel.app/services?service_id=04")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
