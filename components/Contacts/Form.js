import { useState } from "react";
import { addContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone) {
      return false;
    }

    dispatch(addContact({ id: nanoid(), name, phone }));
    setName("");
    setPhone("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Phone"
          type="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default Form;
