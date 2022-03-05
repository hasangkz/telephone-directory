import React from "react";
import { contactSelectors } from "../../redux/contactSlice";
import { useSelector } from "react-redux";
import Item from "./Item";
export default function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  return (
    <ul className="list">
      {contacts.map(contact => (
        <div>
          <Item key={contact.id} item={contact} />
        </div>
      ))}
    </ul>
  );
}
