import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../components/List';

function Main() {
const [authors, setAuthors] = useState([]);
const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api/authors", { signal: controller.signal })
      .then((res) => {
        setAuthors(res.data)
        setLoaded(true)
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);




  return (
    <div>
      <h3>Main</h3>
      <h2>All Authors</h2>
      <List authors={authors} setLoaded={setLoaded}/>
    </div>
  )
}

export default Main