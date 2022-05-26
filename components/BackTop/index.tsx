import React from "react";

function BackToTop({ onscroll }) {
  return (
    <a id="backToTopButton" href="#home" className={ onscroll ? 'show' : ''}>
    <div className="icon"><i className="fa-solid fa-circle-arrow-up"></i></div>
    </a>
  )
}

export default BackToTop;