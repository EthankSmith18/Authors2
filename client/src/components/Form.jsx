import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';



function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const [nameError, setNameError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    const newAuthor = {
      name,
    };


    axios
    .post("http://localhost:5001/api/authors/", newAuthor)
    .then((res) => {
      console.log(res.data);
      setErrors({})
      navigate("/authors");
    })
    .catch((err) => {
      console.log(err);
      console.log(err);
      setErrors(err.response.data.errors);
    });
  };

  const nameHandler = (e) => {
    setErrors({});
    setName(e.target.value);
      if (e.target.value.length < 3){
      setNameError("Name must be greater than 3 characters.");
      }
      else {
        setNameError(null);
      }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={name}
              // onChange={(e) => setName(e.target.value)}
              onChange={ nameHandler }
            />
            { errors?.name &&
            <div>
            <span className="form-text text-danger">{errors.name.message}</span>
            </div>
            }  
            { nameError &&
            <span className="form-text text-primary">{nameError}</span>
            }           
          </div>
          <div className="d-flex justify-content-end">
            <Link to={'/authors'} className="btn btn-warning me-2" >Cancel</Link>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;