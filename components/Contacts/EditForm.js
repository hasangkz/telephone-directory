import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateContact } from "../../redux/contactSlice";
import { useHistory } from "react-router-dom";
export default function EditForm({ contact }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone) {
      return false;
    }
    dispatch(updateContact({ id: contact.id, changes: { name, phone } }));
    history.goBack();
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
