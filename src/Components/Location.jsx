import React from "react";
import "../Styles/Location.css";

const locations = [
  { name: "Mapleton metro station", time: "12-min", icon: "https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac41580575f090a658fa4_location-01.svg" },
  { name: "Mapleton high school", time: "10-min", icon: "https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac4150f448c599589f5e4_location-02.svg" },
  { name: "Elmwood fitness club", time: "15-min", icon: "https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac415e9962bf4ba64873b_location-03.svg" },
  { name: "Riverside shopping plaza", time: "15-min", icon: "https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac415afeea5c141640224_location-06.svg" },
  { name: "HV general hospital", time: "25-min", icon: "https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac41559d1843babd0f285_location-04.svg" },
  { name: "Greenwood park", time: "5-min", icon: "https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac41516ed64c02b7c1408_location-05.svg" },
];

const Location = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="heading">Conveniently located in the heart of the city</h1>
        <ul className="location-list">
          {locations.map((loc, index) => (
            <li key={index} className="location-item">
              <img src={loc.icon} alt={loc.name} className="icon" />
              <span className="name">{loc.name}</span>
              <span className="time">{loc.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac97d9a97cb3ec9181211_map.avif" alt="Map" className="map-image" />
      </div>
    </div>
  );
};

export default Location;





        //     <div className="co">
        // <h1>Conveniently located in the heart of the city</h1>
        //     <div className="containers">
        //         <div className="ser">
        //         <div className="image1">
        //             <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac41580575f090a658fa4_location-01.svg" />
        //             <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac4150f448c599589f5e4_location-02.svg" />
        //             <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac415e9962bf4ba64873b_location-03.svg" />
        //             <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac415afeea5c141640224_location-06.svg" />
        //             <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac41559d1843babd0f285_location-04.svg" />
        //             <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac41516ed64c02b7c1408_location-05.svg" />
        //         </div>

        //         <div className="paragraph">
        //             <p>Mapleton metro station</p>
        //             <p>Elmwood fitness club</p>
        //             <p>Greenwood park</p>
        //             <p>Mapleton high school</p>
        //             <p>HV general hospital</p>
        //             <p>Riverside shopping plaza</p>
        //         </div>
        //         <div className="Buttons">
        //             <pre>12-min</pre>
        //             <pre>10-min</pre>
        //             <pre>15-min</pre>
        //             <pre>15-min</pre>
        //             <pre>25-min</pre>
        //             <pre>5-min</pre>
        //         </div>
        //         </div>
        //         <div className="map-container">
        //             <img
        //                 src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac97d9a97cb3ec9181211_map.avif"
        //                 alt="Map"
        //                 className="map-image"
        //             />
        //         </div>
        //     </div>
        //     </div>




