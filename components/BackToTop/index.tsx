import React from "react";

function BackToTop({ onscroll }) {
  return (
    <a id="backToTopButton" href="#busca" className={onscroll ? 'show' : ''}>
      <div className="icon">
        <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.5 12C7.77614 12 8 11.7761 8 11.5V4.70711L10.6464 7.35355C10.8417 7.54882 11.1583 7.54882 11.3536 7.35355C11.5488 7.15829 11.5488 6.84171 11.3536 6.64645L7.85355 3.14645C7.65829 2.95118 7.34171 2.95118 7.14645 3.14645L3.64645 6.64645C3.45118 6.84171 3.45118 7.15829 3.64645 7.35355C3.84171 7.54882 4.15829 7.54882 4.35355 7.35355L7 4.70711V11.5C7 11.7761 7.22386 12 7.5 12Z" fill="#151515" />
        </svg>
      </div>
    </a>
  )
}

export default BackToTop;