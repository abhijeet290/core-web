import React, { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>{heading}</h1>
      {cities.length === 0 ? <p>No cities found</p> : null}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
            key={city}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
