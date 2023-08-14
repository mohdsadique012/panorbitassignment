import React, { useContext, useState } from "react";
import "./MesaageBox.css";
import { AppContext } from "../../Context/ProfileContext";
function MessageBox() {
  let Data = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  let profile_data = null; // Initialize profile_data to null

  if (Data.filteredProfiles && Data.filteredProfiles.length > 0) {
    profile_data = Data.filteredProfiles[0]; // Assign the first element
  }
  let filterData = Data?.profiles.filter((el) => {
    return el.id !== profile_data?.id;
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container-box">
      <div className="circle" onClick={toggleDropdown}>
        Message Box
      </div>
      {isOpen && (
        <div className="dropdown-content-box">
          {/* Dropdown content goes here */}
          {filterData?.map((el) => {
            return (
              <div className="profile-container-message">
                <span className="profile-image-box">
                  <img src={el.profilepicture} alt={el.name} />
                </span>
                <span>{el.name}</span>
                {<span className="online-dot">.</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MessageBox;
