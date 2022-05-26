import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h2>Entre em contato!</h2>
          </header>

          <div className="content">
            <ul>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <p> Rio de Janeiro - Rj </p>
              </li>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <p> jbandrade.dev@gmail.com </p>
              </li>
            </ul>

            <a
              className="button"
              href="https://wa.me/5511987654321"
              target="_blank"
            >
              <div>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              Agende uma visita
            </a>
          </div>
        </div>

        <div className="col-b">
          <img
            src=""
            alt="Foto"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
