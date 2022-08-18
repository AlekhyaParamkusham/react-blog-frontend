import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./single.css";
import { CountryContext } from "../../context/CountryContext";

const SingleItalian = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const { country, setCountry } = useContext(CountryContext);

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://recipe-server-blog.herokuapp.com/${country}/${path}`
      );
      setBlog(res.data[`${country}`]);
    };
    getBlog();
  }, [path]);

  const rendering = (
    <div className="single-outer">
      <div className="top">
        <h3 className="single-title">{blog.title}</h3>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={blog.imageUrl} className="single-image" />
        </div>
        <div className="right">
          <div className="right-top">
            <table>
              <thead>
                <tr>
                  <th>Servings</th>
                  <th>Prep Time</th>
                  <th>Total time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{blog.yields}</td>
                  <td>{blog.prepTime}</td>
                  <td>{blog.totalTime}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right-bottom">
            <div className="right-ingredients">
              <table>
                <thead>
                  <tr>
                    <th>Ingredients</th>
                  </tr>
                </thead>
                <tbody>
                  {blog.ingredients &&
                    blog.ingredients.map((ele, index) => (
                      <tr key={index}>
                        <td>{ele}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="right-directions">
              {blog.directions &&
                blog.directions.map((ele, index) => <li key={index}>{ele}</li>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{loading ? rendering : <p>Data being loaded...</p>}</>;
};

export default SingleItalian;
