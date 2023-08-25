import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import ProjectsMenu from "./ProjectsMenu";

export default class Projects extends Component {
  render() {
    return (
      <>
        <Avatar page="projects" />
        <ProjectsMenu />
      </>
    );
  }
}