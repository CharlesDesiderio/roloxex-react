import React, { useState } from "react";

// rolodex

// name: { family, given } <-- Avoid using first/last. Doesn't work right with names from Asia. Can allow a toggle to select how that contact's name should be ordered, too?
// phone: ''
// email: ''

// gender: '' <-- STRING
// pronouns: '' <-- STRING - seriously, let people fill these in however they want. There's not going to be a 'search-by-gender' fucntion. It's not a dating app.
// DOB (unix date)

// address '' <-- Just a big 'ol textarea field. Not every country does the city/state/zip combo. Saves me from having to parse zip codes, they're different lengths in different countries.

// links: [{site-name, url}, ... ] <-- Can literally add anything, but I can detect for titles (facebook/twitter/instagram, etc) to pull a FontAwesome icon.
// notes: ''


const DisplayCard = (person) => {
  
  const [people, setPeople] = useState([]);
  
  const fetchData = () => {
    fetch('https://apple-plausible-ladybug.glitch.me/names/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeople(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
    
  fetchData();

  return (
    <div>
      <h1>
        {/* {person.data.name.family}, {person.data.name.given} */}
        {people.map((x) => {
          return (

            <div>
          <li>{x.name.family}, {x.name.given}</li>
          <li>{x.age}</li>
          <li>{x.gender}</li>
        <li>{x.address}</li>
        </div>
        )
        })}
      </h1>
    </div>
  );
};

export default DisplayCard;
