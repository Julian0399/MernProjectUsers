import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4000/api/users");
      setListUser(response.data);
    };
    getUsers();
  }, [listUser]);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
  };

  return (
    <div className="row">
      {listUser.map((list) => (
        <div className="col-md-4 p-2" key={list._id}>
          <div className="card">
            <div className="card-header">
              <h5> Nombre: {list.name}</h5>
            </div>
            <div className="card-body">
              <p> LastName: {list.lastname}</p>
              <p> Age: {list.age}</p>
              <p> phone: {list.phone}</p>
              <p> email: {list.email}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button
                className="btn btn-danger"
                onClick={() => deleteUser(list._id)}
              >
                Delete
              </button>
              <Link className="btn btn-primary" to={`/edit/${list._id}`}>
                Edit
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListUser;
