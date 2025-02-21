import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateUser = () => {
  const initialState = {
    name: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
  };

  let {id} = useParams()

  const [user, setUser] = useState(initialState);

  const [subId, setSubId] = useState(id)

  const catchData = (e) => {
     const {name,value} = e.target
     setUser({...user,[name]:value})
  }

  const saveData = async (e) =>{
    e.preventDefault()

    const newUser = {
        name: user.name,
        lastname: user.lastname,
        age: user.age,
        phone: user.phone,
        email: user.email
    }
    console.log(newUser);
    
    await axios.post('http://localhost:4000/api/users',newUser)
    setUser({...initialState})
  }

  const updateUser = async (e) => {
    e.preventDefault()
    const userUpdate = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      phone: user.phone,
      email: user.email
    }
    await axios.put(`http://localhost:4000/api/users/${subId}`,userUpdate)
    setUser({...initialState})
    setSubId("")
  }

  const getOne = async (id) => {
    const response = await axios.get(`http://localhost:4000/api/users/${id}`)
    const {name,lastname,age,phone,email} = response.data.user
    setUser({
      name,
      lastname,
      age,
      phone,
      email
    })
  }
  useEffect(() => {
    if(subId !== ""){
      getOne(subId)
    }
  },[])

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={saveData}>
          <h2 className="text-center">Create User</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name of the user"
              required
              name="name"
              value={user.name}
              onChange={catchData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">LastName:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the lastname of the user"
              required
              name="lastname"
              value={user.lastname}
              onChange={catchData}

            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the age of the user"
              required
              name="age"
              value={user.age}
              onChange={catchData}

            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the Number of the user"
              required
              name="phone"
              value={user.phone}
              onChange={catchData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the email of the user"
              required
              name="email"
              value={user.email}
              onChange={catchData}
            />
          </div>
          <button className="btn btn-primary form-control">Save User</button>
        </form>
        <form onSubmit={updateUser}>
          <button className="btn btn-primary form-control mt-2">Update User

          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
