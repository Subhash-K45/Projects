import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./Context";
import axios from "axios";

const Purchase = () => {
  const { userName } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  let { id, query } = useParams();
  id = id.slice(1);
  query = query.slice(1);
  const URL = `https://artgallery-api.onrender.com/${query}/${id}`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setState(response.data);
      setLoading(false);
    });
  }, []);
if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Purchase-Product">
      <h2>Purchase Products</h2>
      {state.map(({ img, name, price, category, description }) => (
        <div key={id} className="Products">
          <img src={img} alt="" className="Product-Image"/>
          <p className="Name">{name}</p>
          <p className="price">Price : ${price}</p>
          <p className="category">{category}</p>
          <p className="Description">{description}</p>
          <button className="purchase-button">Purchase</button>
        </div>
      ))}
    </div>
  );
};

export default Purchase;
