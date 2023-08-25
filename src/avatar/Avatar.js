import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar-image.png";
import avatarImage2 from "../assets/avatar-image-1.png";
import avatarImage3 from "../assets/avatar-image-2.png";
import avatarImage4 from "../assets/avatar-image-3.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  let avatarImg = avatarImage;

  if (page === 'skills') avatarImg = avatarImage2;
  else if (page === 'projects') avatarImg = avatarImage3;
  else if (page === 'contact') avatarImg = avatarImage4;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImg} className={avatarClass} alt="avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
