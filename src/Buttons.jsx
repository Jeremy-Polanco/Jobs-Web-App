import React from "react";

function Buttons({ filterByLocation, setFilterByLocation }) {
  let locations = [
    "United Kingdom",
    "United States",
    "Russia",
    "Japan",
    "Germany",
    "Singapore",
    "New Zealand",
  ];
  return (
    <div className="location-filter">
      {locations.map((location, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              name="location"
              value={location}
              onClick={() => setFilterByLocation({ location })}
            />
            {location}
          </label>
        );
      })}
    </div>
  );
}

export default Buttons;
