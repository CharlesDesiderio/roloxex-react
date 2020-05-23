import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard.js";
import AddPerson from "./AddPerson.js";

// OH hey the backend stuff is gonna be done through Glitch, here's the link: https://apple-plausible-ladybug.glitch.me/

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://apple-plausible-ladybug.glitch.me/names/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeople(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {people.map((x) => {
        return <DisplayCard person={x} />;
      })}
      <AddPerson />
    </div>
  );
};

export default App;
