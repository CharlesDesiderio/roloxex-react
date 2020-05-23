import React, { useState } from "react";


const AddPerson = () => {
    
  const [formInfo, setFormInfo] = useState({})

   const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.value)

        fetch('https://apple-plausible-ladybug.glitch.me/add/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({formInfo})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
      setFormInfo({
        ...formInfo,
        [e.target.name]: e.target.value
      })
    }

    return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      
      <label htmlFor="given-name">Given Name</label>
      <input required id="given-name" name="givenName" type="text" value={formInfo.givenName} />

      <label htmlFor="family-name">Family Name</label>
      <input required id="family-name" name="familyName" type="text" value={formInfo.familyName} />

      <label htmlFor="age">Age</label>
      <input id="age" name="age" type="text" value={formInfo.age} />

      <button>Send data!</button>
    </form>
  );
};

export default AddPerson;
