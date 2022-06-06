import React, { useState, useEffect } from 'react';

import { useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function Imoveis() {

  const [Scroll, setScroll] = useState(false)
  const [Show, setShow] = useState(false)

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["bairro", "rua", "cidade", "regiao", "tipo", "vagas", "quartos"]);

  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    }
  })

  useEffect(() => {
    fetch("http://localhost:8080/imoveis")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    function ShowNavOnScroll() {
      if (scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    function ShowBackToTopButtonOnScroll() {
      if (scrollY > 500) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    function onScroll() {
      ShowNavOnScroll()
      ShowBackToTopButtonOnScroll()
    }

    window.addEventListener('scroll', onScroll)

  }, []);

  console.log()


  function Arrow(props: { onClick: React.MouseEventHandler<SVGSVGElement> | undefined; left: any }) {
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return (
      <p>
        deu ruim :(
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Site sobre ..." />
          <meta name="author" content="João Andrade" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="http://localhost:8080/imoveis"></link>
          <title> Imóveis </title>
        </Head>
        <Navigation onscroll={Scroll} />
        <section id="busca">
          <div className="wrapper">
            <div className="search">
              <label htmlFor="search-form">
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Busque por bairro ..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </label>
            </div>
            <ul className="content">
              {search(items).map((item) => (
                <div key={item.id}>
                  <div className="cards">
                    <a href={item.link}>
                      <div className="slide">

                        <ul ref={sliderRef} className="keen-slider">
                          <li className="fader__slide keen-slider__slide">
                            <Image src={item.img01} alt={item.alt01} layout="responsive"
                              width={700}
                              height={475} 
                              priority
                            />
                          </li>
                          <li className="fader__slide keen-slider__slide">
                            <Image src={item.img02} alt={item.alt02} layout="responsive"
                              width={700}
                              height={475} />
                          </li>
                          <li className="fader__slide keen-slider__slide">
                            <Image src={item.img03} alt={item.alt03} layout="responsive"
                              width={700}
                              height={475} />
                          </li>

                          <p className="textDiv">{item.button}</p>

                          {loaded && instanceRef.current && (
                            <>
                              <Arrow
                                left
                                onClick={(e: { stopPropagation: () => any }) =>
                                  e.stopPropagation() || instanceRef.current?.prev()
                                }
                              />

                              <Arrow
                                onClick={(e: { stopPropagation: () => any }) => e.stopPropagation() || instanceRef.current?.next()}
                                left={undefined}
                              />
                            </>
                          )}
                        </ul>
                      </div>
                      <ul className="card">
                        <li className="tipo">{item.tipo}</li>
                        <li className="rua">{item.rua}</li>
                        <li className="bairroCidade">{item.bairroCidade}</li>
                        <li className="caracteristicas">{item.caracteristicas}</li>
                        <li className="condMaisIptu">
                          Condo. + IPTU {item.condMaisIptu}
                        </li>
                        <li className="preco">{item.preco}</li>
                      </ul>
                    </a>

                  </div>
                </div>
              ))}
            </ul>
          </div>
        </section>
        <BackToTop onscroll={Show} />
        <Footer />
      </div>
    );
  }
}

export default Imoveis