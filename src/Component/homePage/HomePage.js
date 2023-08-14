import React, { useContext } from "react";
import { AppContext } from "../../Context/ProfileContext";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  let Data = useContext(AppContext);
  let profile = Data.profiles;

  return (
    <>
      <div className="home-page">
        <div className="wavy-background"></div>
        <div className="profiler-container">
          <div className="account-section">
            <p className="centered-text">Select an account</p>
          </div>
          <div className="profile-section">
            {profile.map((el, key) => {
              return (
                
               
                <div className="profile-info">
        
                  <img
                    src={el.profilepicture}
                    alt=""
                    className="profile-image"
                  />
                  <Link to={`/profilepage/${el.id}`} className="link-style" >         
                    <h4>{el.name}</h4>
                  </Link>
                </div>
              
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
