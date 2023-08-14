import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { AppContext, useProfileGlobal } from "../../Context/ProfileContext";
function SideBar() {
  let Data = useContext(AppContext);
  const { getStatus } = useProfileGlobal();

  // using useefect for getting single data of user
  const [status, setStatus] = useState(true);
  const [profile, setProfile] = useState("Profile");

  useEffect(() => {
    getStatus(status, profile);
    console.log(profile, "mnmnmnmn");
  }, [status, profile]);

  return (
    <>
      <div className="sidebar">
        <div>
          <p
            onClick={() => {
              setStatus(true);
              setProfile("Profile");
            }}
            className="sidebar-p"
          >
            Profile 
          </p>
          <p
            onClick={() => {
              setStatus(false);
              setProfile("Post");
            }}
            className="sidebar-p"
          >
            Post 
          </p>
          <p
            onClick={() => {
              setStatus(false);
              setProfile("Gallery");
            }}
            className="sidebar-p"
          >
            Gallery 
          </p>
          <p
            onClick={() => {
              setStatus(false);
              setProfile("ToDo");
            }}
            className="sidebar-p"
          >
            ToDo 
          </p>
        </div>
      </div>
    </>
  );
}

export default SideBar;
