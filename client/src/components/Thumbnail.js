import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const Thumbnail = () => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/thumbnails", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.thumbnails);
      });
  }, []);
  return (
    <div className="home">
      <button
        className="btn #2196f3 blue"
        onClick={(e) => {
          e.preventDefault();
          history("/home");
        }}
      >
        create new thumbnail
      </button>
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <div className="card-images w-40 h-40 center right-2">
              <img src={item.photo} alt="no internet" />
            </div>
            <div className="card-content">
              <h4>{item.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnail;
