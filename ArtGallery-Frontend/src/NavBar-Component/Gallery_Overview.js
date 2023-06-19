import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Gallery_OverView = () => {
  const [Artist, setArtist] = useState([]);
  const [contemporary, setContemporary] = useState();
  const [sculptures, setSculptures] = useState();
  const [Mixed_art, setMixed_art] = useState();
  const [loading, isLoading] = useState(true);
  const [option, setOption] = useState("Search By Artist");
  const [search, setSearch] = useState();
  const [Selction_Array, set_Selection_Array] = useState([
    "Search By Artist",
    "Search By Name",
  ]);
  const [_Array, setArray] = useState([]);
  let result;
  useEffect(() => {
    axios.get("https://artgallery-api.onrender.com/Artist").then((response) => {
      setArtist([].concat(...response.data));
      isLoading(false);
    });
    axios
      .get("https://artgallery-api.onrender.com/Contemporary_Paintings")
      .then((response) => {
        setContemporary(response.data);
      });
    axios
      .get("https://artgallery-api.onrender.com/Sculptures")
      .then((response) => setSculptures(response.data));
    axios
      .get("https://artgallery-api.onrender.com/Mixed_Image")
      .then((response) => {
        setMixed_art(response.data);
      });
  }, []);

  function createURL(category, id) {
    switch (category) {
      case "Contemporary Paintings":
        category = "Contemporary_Paintings";
        break;
      case "Sculptures":
        category = "Sculptures";
        break;
      case "Mixed Media Works":
        category = "Mixed_Image";
        break;
    }
    return `/purchase/:${id}/:${category}`;
  }

  function handleOptionChange(e) {
    const User_selection = e.target.value;
    setOption(User_selection);
    setArray([...contemporary, ...sculptures, ...Mixed_art]);
  }

  function handleInput(e) {
    const User_Input = e.target.value;
    setSearch(User_Input);
  }

  return (
    <div className="Gallery-OverView">
      <div className="Gallery-OverView-Content-Box">
        <div className="search">
          <span>
            <AiOutlineSearch className="Search-icon" />
          </span>
          <input
            type="text"
            placeholder="Search"
            onInput={(e) => {
              handleInput(e);
            }}
          ></input>
          <select
            className="select"
            onInput={(e) => handleOptionChange(e)}
          >
            <option>{Selction_Array[0]}</option>
            <option>{Selction_Array[1]}</option>
          </select>
        </div>
        <div className="example-options">
          {option === "Search By Artist" ? (
            <div className="Artist-Heading">
              <h2>Artist</h2>
              <p>Example : </p>
            </div>
          ) : (
            <div className="Name-Heading">
              <h2>Name</h2>
              <p>Example : </p>
            </div>
          )}
          {option === "Search By Artist" ? (
            loading ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {contemporary.map(({ artist, _id }, index) => {
                  if (index < 16) {
                    return <li key={_id}>{artist}</li>;
                  }
                })}
              </ul>
            )
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {contemporary.map(({ name, _id }, index) => {
                if (index < 16) {
                  return <li key={_id}>{name}</li>;
                }
              })}
            </ul>
          )}
        </div>
        <div className="Search-Conent">
          {search === undefined || search.length === 0 ? (
            <p className="Not-Found">Waiting For Response or Element not Found....</p>
          ) : option !== "Search By Artist" ? (
            _Array ? (
              _Array.length !== 0 ? (
                _Array
                  .filter(({ name, id, _id, price, description, img, category }) =>
                    search && name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(({ name, id, _id, price, description, img, category }) => {
                    return (
                      <div key={_id} className="search-elements">
                        <img src={img} alt={name} />
                        <p className="search-name">{name}</p>
                        <p className="search-price">price : ${price}</p>
                        <p className="search-description">{description}</p>
                        <Link to={createURL(category, id)}>
                          <button className="search-purchase-button">
                            Purchase
                          </button>
                        </Link>
                      </div>
                    );
                  })
              ) : (
                <div>
                  <p>Not Found</p>
                </div>
              )
            ) : (
              <div>
                <p>...Waiting For Request (Choose The Option)</p>
              </div>
            )
          ) : _Array ? (
            _Array.length !== 0 ? (
              _Array
                .filter(({ name, id, _id, price, description, category, img, artist }) =>
                  search && artist && artist.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ name, id, _id, price, description, img, category, artist }) => {
                  return (
                    <div key={_id} className="search-elements">
                      <img src={img} alt={name} />
                      <p className="search-name">{name}</p>
                      <p className="search-price">price : ${price}</p>
                      <p className="search-description">{description}</p>
                      <Link to={createURL(category, id)}>
                        <button className="search-purchase-button">
                          Purchase
                        </button>
                      </Link>
                    </div>
                  );
                })
            ) : (
              <>
                {contemporary
                  .filter(({ name, id, _id, price, description, img, artist, category }) =>
                    search && artist && artist.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(({ name, id, _id, price, description, img, artist, category }) => {
                    return (
                      <div key={_id} className="search-elements">
                        <img src={img} alt={name} />
                        <p className="search-name">{name}</p>
                        <p className="search-price">price : ${price}</p>
                        <p className="search-description">{description}</p>
                        <Link to={createURL(category, id)}>
                          <button className="search-purchase-button">
                            Purchase
                          </button>
                        </Link>
                      </div>
                    );
                  })}
                {Mixed_art
                  .filter(({ name, id, _id, price, description, img, artist, category }) =>
                    search && artist && artist.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(({ name, id, _id, price, description, img, artist, category }) => {
                    return (
                      <div key={_id} className="search-elements">
                        <img src={img} alt={name} />
                        <p className="search-name">{name}</p>
                        <p className="search-price">price : ${price}</p>
                        <p className="search-description">{description}</p>
                        <Link to={createURL(category, id)}>
                          <button className="search-purchase-button">
                            Purchase
                          </button>
                        </Link>
                      </div>
                    );
                  })}
              </>
            )
          ) : (
            <div>
              <p>...Waiting For Request (Choose The Option)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery_OverView;
