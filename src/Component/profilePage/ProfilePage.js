import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import ProfileDetail from "../ProfileDetail/ProfileDetail";
import { AppContext } from "../../Context/ProfileContext";
import "./ProfilePage.css";
import MessageBox from "../MessageBox/MessageBox";

function ProfilePage() {
  const { id } = useParams();
  const Data = useContext(AppContext);
  const status = Data?.status;
  const profile_page = Data?.name;

  return (
    <>
      <SideBar />
      <MessageBox />
      <Navbar profile_page={profile_page} />

       
        {status ? (
          <ProfileDetail />
        ) : (
          <h1 className="comming-soon">Coming Soon ...</h1>
        )}
    

    </>
  );
}

export default ProfilePage;

