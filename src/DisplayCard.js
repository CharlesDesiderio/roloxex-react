import React, { useState } from "react";
import EditPerson from './EditPerson.js'

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

const DisplayCard = (props) => {

const [isEdit, setIsEdit] = useState(false)

  const deleteItem = (id) => {
    fetch("https://apple-plausible-ladybug.glitch.me/delete/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => {
        props.queryDB();
      })
      .catch((err) => console.log(err));
  };

  const editItem = (id) => {
    setIsEdit(!isEdit);
  }

  return !isEdit ? (
    <div className="displayCard">
      <button className="deleteButton" onClick={() => deleteItem(props.person.id)}>🗑</button>
      <button className="editButton" onClick={() => editItem(props.person.id)}>Edit</button>
      <div className="showCard">
      <p className="displayCard-p name-field">
        {props.person.family}, {props.person.given}
      </p>
      
      <p className="displayCard-p">Phone Number: {props.person.phone}</p>
      <p className="displayCard-p">E-Mail: {props.person.email}</p>
      <p className="displayCard-p">Gender: {props.person.gender}</p>
      <p className="displayCard-p">Pronouns: {props.person.pronouns}</p>
      <p className="displayCard-p">Birthday: {props.person.birthday}</p>
      <p className="displayCard-p">Address: {props.person.address}</p>
      <p className="displayCard-p">Website:{props.person.website}</p>
      <p className="displayCard-p">Notes:{props.person.notes}</p>
      </div>

      
    </div>
  ) : (<div><div className="editCard">
  <EditPerson queryDB={props.queryDB} editItem={editItem} person={props.person} />
</div></div>);
};

export default DisplayCard;
