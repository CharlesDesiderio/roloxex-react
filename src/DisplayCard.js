import React from "react";

// rolodex

// id: <-- unix date; can double as creation date, I guess, but why would I need that?
// name: { family, given } <-- Avoid using first/last. Doesn't work right with names from Asia. Can allow a toggle to select how that contact's name should be ordered, too?
// phone: ''
// email: ''

// gender: '' <-- STRING
// pronouns: '' <-- STRING - seriously, let people fill these in however they want. There's not going to be a 'search-by-gender' fucntion. It's not a dating app.
// DOB (unix date)

// address '' <-- Just a big 'ol textarea field. Not every country does the city/state/zip combo. Saves me from having to parse zip codes, they're different lengths in different countries.

// website: '' <-- Can literally add anything, but I can detect for titles (facebook/twitter/instagram, etc) to pull a FontAwesome icon. Let's keep it to one for now.
// notes: ''

const DisplayCard = (person) => {

  return (
    <div className="displayCard">
      <p>
        Name: {person.person.name.family}, {person.person.name.given}
      </p>
      <p>Phone number: {person.person.phone}</p>
      <p>E-Mail: {person.person.email}</p>
      <p>Gender:{person.person.gender}</p>
      <p>Pronouns:{person.person.pronouns}</p>
      <p>Birthday: {person.person.birthday}</p>
      <p>Address: {person.person.address}</p>
      <p>Website:{person.person.website}</p>
      <p>Notes:{person.person.notes}</p>
    </div>
  );
};

export default DisplayCard;
