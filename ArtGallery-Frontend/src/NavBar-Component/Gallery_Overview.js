import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import Contemporary from "../Gallery-Overview-Components/Contemporary";
const Gallery_OverView = () => {
  const [Artist, setArtist] = useState([]);
  const [contemporary, setContemporary] = useState();
  const [sculptures, setSculptures] = useState();
  const [Mixed_art, setMixed_art] = useState();
  const [loading, isLoading] = useState(true);
  const [option, setOption] = useState("Search By Artist");
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
      .then((response) => setMixed_art(response.data));
  }, []);

  function handleOptionChange(e) {
    const User_selection = e.target.value;
    setOption(User_selection);
    if (User_selection === "Search By Artist") {
      setArray(Artist);
    } else {
      setArray([...contemporary, ...sculptures, ...Mixed_art]);
    }
  }

  return (
    <div className="Gallery-OverView">
      <div>
        <div className="search">
          <span>
            <AiOutlineSearch />
          </span>
          <input type="text" placeholder="Search"></input>
          <select className="select" onInput={(e) => handleOptionChange(e)}>
            <option>{Selction_Array[0]}</option>
            <option>{Selction_Array[1]}</option>
          </select>
        </div>
        <div className="example-options">
          {option === "Search By Artist" ? (
            loading ? (
              <p>Loading...</p>
            ) : (
              Artist.map(({artist,_id},index) => {
                if(index<16){
                    return(
                        <div key={_id}>
                       <p>{artist}</p>
                        </div>
                    )
                }
            })
            )
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            _Array.map(({name,_id},index) => {
                if(index<16){
                    return(
                        <div key={_id}>
                            <p>{name}</p>
                        </div>
                    )
                }
        })
          )}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Gallery_OverView;
