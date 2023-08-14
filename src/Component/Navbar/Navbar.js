import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
import { useProfileGlobal, AppContext } from "../../Context/ProfileContext";
function Navbar({ profile_page }) {
  const { id } = useParams();
  console.log(id, "idddd");
  let Data = useContext(AppContext);
  const { getProfileId, } = useProfileGlobal();

  let profile_data = null; // Initialize profile_data to null

  if (Data.filteredProfiles && Data.filteredProfiles.length > 0) {
    profile_data = Data.filteredProfiles[0]; // Assign the first element
  }

  let random_data = Data?.randomProfile;

  console.log(profile_data, "profile", random_data);
  // filter out except user from main data array


  let other_login_data = Data.profiles.filter((el) => {
    return el.id !== profile_data?.id;
  });

  // Random two profile selection from given array

  function getRandomElements(array, count) {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  const twoRandomItems = getRandomElements(other_login_data, 2);
  // using useefect for getting single data of user
  useEffect(() => {

    getProfileId(id);

  }, [id]);

  return (
    <>
      <div className="navbar">
        <div className="left-section">
          <p className="profile-page">{profile_page}</p>
        </div>
        <div className="right-section">
          <img
            src={profile_data?.profilepicture}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-dropdown">
            <p>{profile_data?.name}</p>
            <div className="dropdown-content">
              <a href="#">
                <div className="profile-content-dropdown">
                  <img
                    src={profile_data?.profilepicture}
                    className="dropdown-profile-image"
                  />{" "}
                  <p className="name-dropdown">{profile_data?.name}</p>
                  <p className="email-dropdown">{profile_data?.email}</p>
                </div>
              </a>
              {twoRandomItems?.map((el) => {
                return (
                  <a >
                    <div className=" two-random-profile ">
                      <img
                        src={el.profilepicture}
                        alt="Profile"
                        className="profile-image"
                      />
                      <Link to={`/profilepage/${el.id}`} className="link-style">
                        <p className="random-profiler">{el.name}</p>
                      </Link>
                    </div>
                  </a>
                );
              })}

              <a>
                <div className="button-div">
                  <Link to={"/"} className="link-style">
                    {" "}
                    <button className="button">sign out</button>
                  </Link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
