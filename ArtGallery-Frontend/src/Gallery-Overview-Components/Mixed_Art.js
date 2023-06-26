import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Mixed_Art = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://artgallery-api.onrender.com/Mixed_Image")
      .then((response) => {
        setState(response.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="Mixed_Art">
      <h2>Mixed Media Works</h2>
      <div className="Mixed_Art-item-Box">
        
        {loading
          ? "Loading ..."
          : state.map(
              ({ id, img, price, artist, description, name, category }) => {
                const link = "/purchase/:" + id + "/:Mixed_Image";
                return (
                  <div className="Mixed_Art-element" key={id}>
                    <img src={img} alt={name} />
                    <p className="Name">{name}</p>
                    <p className="Creater">
                      <span className="Artist">Artist : </span>
                      {artist}
                    </p>
                    <p className="price">
                      <span className="Price">$price : </span>
                      {price}
                    </p>
                    <p className="Description">{description}</p>
                    <Link to={link}>
                      <button className="purchase-button">Purchase </button>
                    </Link>
                  </div>
                );
              }
            )}
      </div>
    </div>
  );
};
export default Mixed_Art;
