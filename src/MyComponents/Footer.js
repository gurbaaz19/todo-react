import React from "react";

export const Footer = () => {
    let footerStyle={
        position:"absolute",
        bottom:"0",
        width:"100%",
    }
  return (
      <footer className="bg-dark text-light" style={footerStyle}>
        <p className="text-center">
        To-Do List in React
      </p></footer>
  )}