import React, { useState } from "react";
import EditPerson from "./EditPerson.js";

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
  const [isEdit, setIsEdit] = useState(false);

  const editItem = () => {
    setIsEdit(!isEdit);
  };

  return !isEdit ? (
    <div className="displayCard">
      <button className="editButton" onClick={() => editItem(props.person.id)}>
        Edit
      </button>
      <div className="showCard">
        <p className="displayCard-p name-field">
          {props.person.given} {props.person.family}
        </p>
        {props.person.phone ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
            Phone Number: </p>
            <p className="contact-info">{props.person.phone}</p>
          </div>
        ) : (
          ""
        )}

        {props.person.email ? (
          <div className="displayCard-p">
            <p className="label-p">E-Mail: </p>
            <p className="contact-info">{props.person.email}</p>
          </div>
        ) : (
          ""
        )}
        {props.person.gender ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
          
            Gender: </p>
            <p className="contact-info">{props.person.gender}</p>
            </div>
        ) : (
          ""
        )}
        {props.person.pronouns ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
            Pronouns: </p>
            <p className="contact-info">{props.person.pronouns}</p>
          </div>
        ) : (
          ""
        )}
        {props.person.birthday ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
            Birthday: </p>
            <p className="contact-info">{props.person.birthday}</p>
          </div>
        ) : (
          ""
        )}
        {props.person.address ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
            Address: </p>
            <p className="contact-info">{props.person.address}</p>
          </div>
        ) : (
          ""
        )}
        {props.person.website ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
            Website: </p>
            <p className="contact-info">{props.person.website}</p>
          </div>
        ) : (
          ""
        )}
        {props.person.notes ? (
          <div className="displayCard-p">
          <p className="displayCard-p">
            Notes:</p>
            <p className="contact-info">{props.person.notes}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <div>
      <div className="editCard">
        <EditPerson
          queryDB={props.queryDB}
          editItem={editItem}
          person={props.person}
        />
      </div>
    </div>
  );
};

export default DisplayCard;
