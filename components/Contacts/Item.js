import React from "react";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactSlice";
import { Link } from "react-router-dom";
export default function Item({ item }) {
  const dispatch = useDispatch();
  const handleDelete = id => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      dispatch(deleteContacts(id));
    }
  };
  return (
    <ul className="list">
      <li>
        <span>{item.name}</span>
        <span>{item.phone}</span>
        <div className="edit">
          <Link to={`/edit/${item.id}`}>
            <span>EDIT</span>
          </Link>
          <span className="delete" onClick={() => handleDelete(item.id)}>
            X
          </span>
        </div>
      </li>
    </ul>
  );
}
