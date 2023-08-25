import React from "react";
import ContactMenu from "./ContactMenu";
import Avatar from "../avatar/Avatar";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Avatar page="contact" />
      <ContactMenu />
    </>
  );
};

export default Contact;