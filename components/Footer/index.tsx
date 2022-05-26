import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div>
          <a className="logo" href="#home">
            <img src="" alt="logo"/>
          </a>

          <p>
            ©2022 João Andrade. <br />
            Todos os direitos reservados.
          </p>
        </div>

        <div>

        <ul className="social-links">
            <li>
              <a target="_blank" rel="noreferrer" href="https://instagram.com">
                <div className='icon'>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://facebook.com">
                <div className='icon'>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://youtube.com">
                <div className='icon'>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
