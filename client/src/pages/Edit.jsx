import React from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({
    name: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/authors/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/authors/${id}`, author)
      .then((res) => {
        console.log(res.data);
        navigate("/authors");
      })
      .catch((err) => console.log(err));
  };

  const handleCheck = (e) => {
    setAuthor({
      ...author,
      isComplete: e.target.checked,
    });
  };

  return (
    <div>
      <h1> Edit Author</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
          <div className="form-check mb-3">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="form-check-input"
                checked={author.isComplete}
                onChange={handleCheck}
              />
              <label htmlFor="isComplete" className="form-check-label">
                Completed?
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={handleChange}
                value={author.name}
              />
            </div>
            <div className="d-flex justify-content-end">
            <Link to={'/authors'} className="btn btn-warning me-2" >Cancel</Link>
              <button type="submit" className="btn btn-danger me-2">
                Submit Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
