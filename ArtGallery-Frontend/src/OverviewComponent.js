import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const OverView = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://artgallery-api.onrender.com/Gallery_Overview")
      .then((response) => setState(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="OverView-Headings">
        <h1>Gallery OverView</h1>
        <p>
          Our gallery is home to a diverse range of artistic styles and forms.
          From contemporary paintings and sculptures to mixed media works from
          around the world, there's something for everyone.
        </p>
      </div>
      <div className="OverView-Content">
        <div className="Contemporary-Main_Page">
          <img
            src="https://i.etsystatic.com/21122594/r/il/0f3301/2481263476/il_fullxfull.2481263476_ok6w.jpg"
            alt="Contemporary Image"
          />
          <Link to="/Contemporary_Paintings">{state[0]}</Link>
          <p>Experience color, dimension, and innovation.</p>
        </div>
        <div className="Sculputures-Main_Page">
          <img
            src="https://mikefieldsbronzes.com/wp-content/uploads/2014/12/Unity-Contemporary-Sculpture-Mike-Fields-2.jpg"
            alt="Sculputures"
          />
          <Link to="/Sculptures">{state[1]}</Link>
          <p>Discover unusual forms and exciting abstractions.</p>
        </div>
        <div className="Mixed_Art-Main_Page">
          <img
            src="https://www.artfulflight.com/wp-content/gallery/mixed-media-paintings/IMG_2961.jpg"
            alt="Mixed_Art"
          />
          <Link to="/Mixed_Art">Mixed Media Works</Link>
          <p>Explore new materials and unexpected combinations.</p>
        </div>
      </div>
    </>
  );
};

export default OverView;
