import React from 'react'
import Data from './dados'
import Slide from '../Slide'

function Cards() {
  return (
    <div>
    <section id="home">
    <div id="cards">
      <div className="wrapper">
        <div className="content">
          {Data.map(data => {
            return (
              <div key={data.id} className="cards">
                <Slide/>
                <div className="card">
                  <p className="tipo">{data.tipo}</p>
                  <p className="rua">{data.rua}</p>
                  <p className="bairroCidade">{data.bairroCidade}</p>
                  <p className="caracteristicas">{data.caracteristicas}</p>
                  <p className="condMaisIptu">
                    Condo. + IPTU {data.condMaisIptu}
                  </p>
                  <p className="preco">{data.preco}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Cards

