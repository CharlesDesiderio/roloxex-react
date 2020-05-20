import React from 'react';
import DisplayCard from './DisplayCard.js';

// HEY THIS IS DUMMY DATA. I've got a whole schema defined in the DisplayCard file. This is 100% going to be removed later so like, yeah.
const basicData = {
  name: {
    family: "Smith",
    given: "John"
  }
}

// OH hey the backend stuff is gonna be done through Glitch, here's the link: https://apple-plausible-ladybug.glitch.me/

const App = () => {
  return (
    <div className="App">
      <DisplayCard data={basicData} />

    </div>
  );
}

export default App;
