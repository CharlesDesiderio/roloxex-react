import React, { useState } from "react";

const AddPerson = () => {
  const defaultFormInfo = {
    givenName: "",
    familyName: "",
    phone: "",
    email: "",
    gender: "",
    pronouns: "",
    birthday: "",
    address: "",
    website: "",
    notes: "",
  }

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
      .then(() => setFormInfo(defaultFormInfo))
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
        <label htmlFor="given-name">Given Name</label>
        <input
          onChange={handleChange}
          required
          id="given-name"
          name="givenName"
          type="text"
          value={formInfo.givenName}
        />

        <label htmlFor="family-name">Family Name</label>
        <input
          onChange={handleChange}
          required
          id="family-name"
          name="familyName"
          type="text"
          value={formInfo.familyName}
        />

        <label htmlFor="phone">phone</label>
        <input
          onChange={handleChange}
          id="phone"
          name="phone"
          type="text"
          value={formInfo.phone}
        />

        <label htmlFor="email">email</label>
        <input
          onChange={handleChange}
          id="email"
          name="email"
          type="text"
          value={formInfo.email}
        />

        <label htmlFor="gender">gender</label>
        <input
          onChange={handleChange}
          id="gender"
          name="gender"
          type="text"
          value={formInfo.gender}
        />

        <label htmlFor="pronouns">pronouns</label>
        <input
          onChange={handleChange}
          id="pronouns"
          name="pronouns"
          type="text"
          value={formInfo.pronouns}
        />

        <label htmlFor="birthday">birthday</label>
        <input
          onChange={handleChange}
          id="birthday"
          name="birthday"
          type="text"
          value={formInfo.birthday}
        />

        <label htmlFor="address">address</label>
        <input
          onChange={handleChange}
          id="address"
          name="address"
          type="text"
          value={formInfo.address}
        />

        <label htmlFor="website">website</label>
        <input
          onChange={handleChange}
          id="website"
          name="website"
          type="text"
          value={formInfo.website}
        />

        <label htmlFor="notes">notes</label>
        <input
          onChange={handleChange}
          id="notes"
          name="notes"
          type="textarea"
          value={formInfo.notes}
        />

        <button>Send data!</button>
      </form>
    </div>
  );
};

export default AddPerson;
