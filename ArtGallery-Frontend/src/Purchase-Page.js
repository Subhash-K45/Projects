import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./Context";
import axios from "axios";
import Model from "./Model";

const Purchase = () => {
  const { userName,updateUserName } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  let { id, query } = useParams();
  const [amount, setAmount] = useState();
  const [Pop_Up, setPop_Up] = useState(false);
  const[model,setModel]=useState()
  id = id.slice(1);
  query = query.slice(1);
  const URL = `https://artgallery-api.onrender.com/${query}/${id}`;
  const loadScript = (source) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePurchase = async function () {
    setModel(false)
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      console.log({ message: "Razorpay SDK failed to load" });
      return;
    }
    if(!userName){
      setModel(true)
    }
    if (amount && userName) {
      var options = {
        key: "rzp_test_T6I2H2e4kWb31K",
        key_secret: "Ab1gmLOFpVSLXtZeWeUNfcbn",
        amount: amount * 100 * 81,
        currency: "INR",
        name: "ArtGallery",
        description: "for Education purpose",
        handler: function ({ payment_id }) {
          setPop_Up(true);
          alert(payment_id);
        },
        prefill: {
          name: "subhash K",
          email: "subhash4137@gmail.com",
          contact: "6374493353",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#9768d9",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    
  };

  useEffect(() => {
    axios.get(URL).then((response) => {
      setState(response.data);
      setAmount(response.data[0].price);
      setLoading(false);
    });
  }, [URL]);
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      updateUserName(storedUserName);
    }
  }, [updateUserName]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return Pop_Up ? (
      <>
        <div className="full-page">
          <div class="pop-up">
            <img
              src="https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-HD-Image.png"
              alt="purchase-successfull"
            />
            <div className="message">
              <h2>Thank you for purchasing</h2>
              <p>Order confirmed</p>
              <a href="/">Purchase more ..</a>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className="Purchase-Product">
        {model && <Model/>}
        <h2>Purchase Products</h2>
        {state.map(({ id, img, name, price, category, description }) => {
          return (
            <div key={id} className="Products">
              <img src={img} alt="" className="Product-Image" />
              <p className="Name">{name}</p>
              <p className="price">Price: ${price}</p>
              <p className="category">{category}</p>
              <p className="Description">{description}</p>
              <button className="purchase-button" onClick={handlePurchase}>
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Purchase;
