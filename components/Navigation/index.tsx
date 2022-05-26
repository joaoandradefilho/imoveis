import React from 'react'

function Navigation({ onscroll }) {
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }

  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }

  return (
    <nav id="navigation" className={onscroll ? 'scroll' : ''}>
      <div className="wrapper">
        <a className="logo" href="#home">
          <img src="" alt="logo"/>
        </a>

        <div className="menu">
          <ul>
            <li>
              <a onClick={closeMenu} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#about">
                Sobre
              </a>
            </li>
          </ul>

          <a className="button" onClick={closeMenu} href="#contact">
            <div>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            Agende uma visita
          </a>

          <ul className="social-links">
            <li>
              <a target="_blank" rel="noreferrer" href="https://instagram.com">
                <div className="icon">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://facebook.com">
                <div className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://youtube.com">
                <div className="icon">
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <button
          aria-expanded="false"
          aria-label="Abrir menu"
          onClick={openMenu}
          className="open-menu"
        >
          <div className="icon">
            <i className="fa-solid fa-bars"></i>
          </div>
        </button>
        <button
          aria-expanded="true"
          aria-label="Fechar menu"
          onClick={closeMenu}
          className="close-menu"
        >
          <div className="icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
