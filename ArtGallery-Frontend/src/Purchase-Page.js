import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Purchase = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  let { id, query } = useParams();
  id = id.slice(1);
  query = query.slice(1);
  const URL = `https://pear-cooperative-gazelle.cyclic.app/${query}/${id}`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setState(response.data);
      setLoading(false);
    });
  }, []);

  console.log(state[0]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Purshase-Product">
      {state.map(({ img, name, price, category, description }) => (
        <div key={id}>
          <img src={img} alt="" />
          <p>{name}</p>
          <p>{price}</p>
          <p>{category}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Purchase;
