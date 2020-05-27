import React, { useState } from "react";

const EditPerson = (props) => {
  const [formInfo, setFormInfo] = useState(props.person);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://apple-plausible-ladybug.glitch.me/edit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formInfo }),
    })
      .then((res) => res.json())
      .then(() => {
        setFormInfo(formInfo);
        props.queryDB();
        props.editItem();
      })
      .catch((err) => console.log(err));
  };

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

  return (
    <div className="editPerson">
      <button className="editButton cancelButton" onClick={() => props.editItem()}><span role="img" aria-label="Cancel">❌</span></button>
      <button className="deleteButton" onClick={() => deleteItem(props.person.id)}><span role="img" aria-label="Delete">🗑️</span></button>
      <form onSubmit={handleSubmit}>
        <p className="name-field">
          <label htmlFor="edit-given-name"></label>
          <input
            onChange={handleChange}
            required
            id={`${props.person.id}-edit-given-name`}
            name="given"
            type="text"
            value={formInfo.given}
          />
          <label htmlFor="edit-family-name"></label>
          <input
            onChange={handleChange}
            required
            id={`${props.person.id}-edit-family-name`}
            name="family"
            type="text"
            value={formInfo.family}
          />

        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-phone">Phone Number: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-phone`}
            name="phone"
            type="text"
            value={formInfo.phone}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-email">E-Mail: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-email`}
            name="email"
            type="text"
            value={formInfo.email}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-gender">Gender: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-gender`}
            name="gender"
            type="text"
            value={formInfo.gender}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-pronouns">Pronouns: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-pronouns`}
            name="pronouns"
            type="text"
            value={formInfo.pronouns}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-birthday">Birthday: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-birthday`}
            name="birthday"
            type="text"
            value={formInfo.birthday}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-address">Address: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-address`}
            name="address"
            type="text"
            value={formInfo.address}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-website">Website: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-website`}
            name="website"
            type="text"
            value={formInfo.website}
          />
        </p>
        <p className="editPerson-p">
          <label htmlFor="edit-notes">Notes: </label>
          <input
            onChange={handleChange}
            id={`${props.person.id}-edit-notes`}
            name="notes"
            type="textarea"
            value={formInfo.notes}
          />
        </p>
        <button className="updateButton">Update</button>
      </form>
    </div>
  );
};

export default EditPerson;
