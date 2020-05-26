import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard.js";
import AddPerson from "./AddPerson.js";
import './style.css';

// OH hey the backend stuff is gonna be done through Glitch, here's the link: https://apple-plausible-ladybug.glitch.me/

const App = () => {
  const [people, setPeople] = useState([]);

  const queryDB = () => {
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
  }

  useEffect(() => {
    queryDB()
  }, []);

  return (people !== []) ? (
    <div className="App">
      
      {people
      .sort((a, b) => {
        return a.family.toUpperCase() < b.family.toUpperCase() ? -1 : 1
      })
      .map((x) => {
        return <DisplayCard queryDB={queryDB} key={x._id} person={x} />;
      })}
      <AddPerson queryDB={queryDB} />
    </div>
  ) : (
    <div><h1>LOADING</h1></div>
  );
};

export default App;
