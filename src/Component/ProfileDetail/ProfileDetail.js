import React, { useContext } from "react";
import "./ProfileDetail.css";
import { AppContext } from "../../Context/ProfileContext";
import MapApp from "../Map/MapApp";
import SideBar from "../SideBar/SideBar";
function ProfileDetail() {
  let Data = useContext(AppContext);

  let profile_data = Data.filteredProfiles[0];
  return (
    <>

      <div className="outer-container-profile">
        <div className="container-detail-profile">
          <div className="left-profile">
            <div className="left-upper">
              <img
                src={profile_data?.profilepicture}
                className="profile-detail-image"
              />
              <p className="font">{profile_data?.name}</p>

              <div className="details-profile-container">
                <p className="detail">
                  <span className="detail-label fontweight">Name</span>
                  <span className="dott">:</span>{" "}
                  <strong>{profile_data?.name}</strong>
                </p>
                <p className="detail">
                  <span className="detail-label fontweight ">Username</span>
                  <span className="dott">:</span>{" "}
                  <strong>{profile_data?.username}</strong>
                </p>
                <p className="detail">
                  <span className="detail-label fontweight">e-mail</span>
                  <span className="dott">:</span>{" "}
                  <strong>{profile_data?.email}</strong>
                </p>

                <p className="detail">
                  <span className="detail-label fontweight">Phone</span>
                  <span className="dott">:</span>{" "}
                  <strong>{profile_data?.phone}</strong>
                </p>
                <p className="detail">
                  <span className="detail-label fontweight">Website</span>
                  <span className="dott">:</span>
                  <strong>{profile_data?.website}</strong>
                </p>
                <span className="boder-width"></span>
              </div>
            </div>
            <div className="left-lower">
              <p className="fontweight margin">Company</p>

              <div className="details-profile-container">
                <p className="detail">
                  <span className="detail-label spanitem fontweight">Name</span>
                  <span className="dott">:</span>{" "}
                  <strong>{profile_data?.company.name}</strong>
                </p>
                <p className="detail">
                  <span className="detail-label spanitem fontweight">
                    catchphrase
                  </span>
                  <span className="dott">:</span>
                  <strong>{profile_data?.company.catchPhrase}</strong>
                </p>
                <p className="detail">
                  <span className="detail-label spanitem fontweight">bs</span>
                  <span className="dott">:</span>{" "}
                  <strong>{profile_data?.company.bs}</strong>
                </p>
                <span className="boder-widthh"></span>
              </div>
            </div>
          </div>
          <div className="right">
            <p className="font">Adress</p>
            <div className="details-profile-container">
              <p className="detail shift">
                <span className="detail-label  fontweight">Street</span>
                <span className="dott">:</span>{" "}
                <strong>{profile_data?.address.street}</strong>
              </p>
              <p className="detail shift">
                <span className="detail-label  fontweight">Suite</span>
                <span className="dott">:</span>
                <strong>{profile_data?.address.suite}</strong>
              </p>
              <p className="detail shift">
                <span className="detail-label  fontweight">City</span>
                <span className="dott">:</span>{" "}
                <strong>{profile_data?.address.city}</strong>
              </p>
              <p className="detail shift">
                <span className="detail-label  fontweight">Zipcode</span>
                <span className="dott">:</span>{" "}
                <strong>{profile_data?.address.zipcode}</strong>
              </p>

              <MapApp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetail;
