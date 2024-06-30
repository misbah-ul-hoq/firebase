import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useData from "../hooks/useData";

const Services = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const fetchData = useData();
  useEffect(() => {
    fetchData
      .get(`/services?email=${user.email}`)
      .then((res) => setData(res.data));
    // axios
    //   .get(`http://localhost:3000/services?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setData(res.data));
  }, [user?.email, fetchData]);
  return (
    <div>
      {data?.map((item) => (
        <div
          key={item._id}
          className="card card-compact bg-base-100 w-96 shadow-xl"
        >
          <figure>
            <img src={item.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
