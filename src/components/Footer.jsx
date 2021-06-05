import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Jeremy Chee {year}</p>
    </footer>
  );
}

export default Footer;
