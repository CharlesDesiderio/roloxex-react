import React, { useState } from "react";

const AddPerson = (props) => {
  const defaultFormInfo = {
    family: "",
    given: "",
    phone: "",
    email: "",
    gender: "",
    pronouns: "",
    birthday: "",
    address: "",
    website: "",
    notes: "",
  };

  const [formInfo, setFormInfo] = useState(defaultFormInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://apple-plausible-ladybug.glitch.me/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formInfo }),
    })
      .then((res) => res.json())
      .then(() => {
        setFormInfo(defaultFormInfo);
        props.queryDB();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="addPerson">
      <form onSubmit={handleSubmit}>
        <p className="addPerson-p">
          <label htmlFor="given-name">Given Name: </label>
          <input
            onChange={handleChange}
            required
            id="given-name"
            name="given"
            type="text"
            value={formInfo.given}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="family-name">Family Name: </label>
          <input
            onChange={handleChange}
            required
            id="family-name"
            name="family"
            type="text"
            value={formInfo.family}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="phone">Phone Number: </label>
          <input
            onChange={handleChange}
            id="phone"
            name="phone"
            type="text"
            value={formInfo.phone}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="email">E-Mail Address: </label>
          <input
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            value={formInfo.email}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="gender">Gender: </label>
          <input
            onChange={handleChange}
            id="gender"
            name="gender"
            type="text"
            value={formInfo.gender}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="pronouns">Pronouns: </label>
          <input
            onChange={handleChange}
            id="pronouns"
            name="pronouns"
            type="text"
            value={formInfo.pronouns}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="birthday">Birthday: </label>
          <input
            onChange={handleChange}
            id="birthday"
            name="birthday"
            type="text"
            value={formInfo.birthday}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="address">Address: </label>
          <input
            onChange={handleChange}
            id="address"
            name="address"
            type="text"
            value={formInfo.address}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="website">Website: </label>
          <input
            onChange={handleChange}
            id="website"
            name="website"
            type="text"
            value={formInfo.website}
          />
        </p>
        <p className="addPerson-p">
          <label htmlFor="notes">Notes: </label>
          <input
            onChange={handleChange}
            id="notes"
            name="notes"
            type="textarea"
            value={formInfo.notes}
          />
        </p>

        <button>Send data!</button>
      </form>
    </div>
  );
};

export default AddPerson;
