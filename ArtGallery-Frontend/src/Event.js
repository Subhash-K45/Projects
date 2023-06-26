import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
const Event = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://artgallery-api.onrender.com/Event").then((response) => {
      setState(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="Event-Message-Box">
      <div className="Event-Box-Headings">
        <h1>Upcoming Events</h1>
        <p>Stay up to date on our current events.</p>
      </div>
      <div className="Event-Box-Content">
        {loading
          ? "Loading.. "
          : state.map(
              ({
                Event_Title,
                Event_Timings,
                Event_Location,
                Event_Description,
                _id,
              }) => {
                return (
                  <div className="Events-Elements" key={_id}>
                    <h2>{Event_Title}</h2>
                    <p>{Event_Location}</p>
                    <p>{Event_Description.slice(0, 60) + "..."}</p>
                    <p>Timing : {Event_Timings}</p>
                    <a
                      href="https://www.vogue.in/culture-and-living/content/must-visit-art-exhibitions-and-events-in-and-around-india-you-need-to-check-out"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </div>
                );
              }
            )}
      </div>
    </div>
  );
};

export default Event;
