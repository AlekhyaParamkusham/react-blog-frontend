import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./italian.css";
import cooking from "./../../../images/cooking.png";
import edit from "./../../../images/edit.png";
import delIcon from "./../../../images/delete.png";
import add from "./../../../images/add.png";
import Navbar1 from "../../Navbar/Navbar1";
// import AddForm from "../../Add/AddForm";
import { CountryContext } from "../../context/CountryContext";

const localUrl = "http://localhost:3000";

const Italian = () => {
  const history = useHistory();
  const location = useLocation();
  const countryVal = location.pathname.split("/")[1];
  const [italianData, setItalianData] = useState([]);
  const { country, setCountry } = useContext(CountryContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      setCountry(countryVal);
      setLoading(true);
      const res = await axios.get(
        `https://recipe-blog-server.vercel.app/${countryVal}`
      );
      setItalianData(res.data[`${countryVal}`]);
    };
    dataFetch();
  }, []);

  const handleMore = (id) => {
    history.push(`/${countryVal}/${id}`);
  };

  const renderingData = (
    <>
      <div className="outer">
        <Navbar1 val={false} />
      </div>
      <div className="inner">
        {/* <div className="addRecipe">
          <img src={add} className="addImg" />
          <Link to={`/add-${countryVal}`}>
            <h2 className="addText">Add a Recipe!</h2>
          </Link>
        </div> */}

        <div className="wrapper">
          {italianData &&
            italianData.map((data, index) => {
              return (
                <div key={index} className="italian">
                  <img src={data.imageUrl} alt="Image" className="italianImg" />
                  <div className="options">
                    <img
                      onClick={() => handleMore(data._id)}
                      src={cooking}
                      className="viewMore"
                    ></img>
                    {/* <img src={delIcon} className="viewMore" />
                    <img src={edit} className="viewMore" /> */}
                  </div>
                  <Link to={`/${countryVal}/${data._id}`}>
                    <h3 className="italianTitle">{data.title}</h3>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );

  return <>{loading ? renderingData : <p>Data being loaded...</p>}</>;
};

export default Italian;
