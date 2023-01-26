import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function List({authors, setLoaded}) {

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/authors/${id}`)
      .then((res) => {
        console.log(res.data)
        setLoaded(false);
      })
      .catch((err) => console.log(err));
      };


  return (
    authors &&
    authors.map((author) => {
      return (
        <div key={author._id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <p>
              <Link to={`/authors/${author._id}`}>{author.name}</Link>
            </p>
            <div>
              <Link
                to={`/authors/${author._id}/edit`}
                className="btn btn-primary m-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(author._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })
  )
}

export default List