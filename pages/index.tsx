import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'


export default function Home({ destaques }) {
  const [Scroll, setScroll] = useState(false)
  const [Show, setShow] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    }
  })

  useEffect(function () {
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
  }, [])

  function Arrow(props) {
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

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site sobre ..." />
        <meta name="author" content="João Andrade" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title> NossoApp </title>
      </Head>

      <Navigation onscroll={Scroll} />

      <section id="destaques">
        <div>
          <div className="wrapper">
            <div className="content">
              {destaques.map(destaque => {
                return (
                  <div key={destaque.id} className="cards">
                    <a href={destaque.link}>
                      <div className="slide">
                        <ul ref={sliderRef} className="keen-slider">
                          <li className="fader__slide keen-slider__slide">
                            <Image src={destaque.img01} alt={destaque.alt01} layout="responsive"
                              width={700}
                              height={475}
                              priority
                            />
                          </li>
                          <li className="fader__slide keen-slider__slide">
                            <Image src={destaque.img01} alt={destaque.alt01} layout="responsive"
                              width={700}
                              height={475} />
                          </li>
                          <li className="fader__slide keen-slider__slide">
                            <Image src={destaque.img01} alt={destaque.alt01} layout="responsive"
                              width={700}
                              height={475} />
                          </li>

                          <p className="buttonDestaque">{destaque.button}</p>

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
                        <li className="tipo">{destaque.tipo}</li>
                        <li className="rua">{destaque.rua}</li>
                        <li className="bairroCidade">{destaque.bairroCidade}</li>
                        <li className="caracteristicas">{destaque.caracteristicas}</li>
                        <li className="condMaisIptu">
                          Condo. + IPTU {destaque.condMaisIptu}
                        </li>
                        <li className="preco">{destaque.preco}</li>
                      </ul>
                    </a>

                  </div>
                )
              })}
            </div>

            <Link href="/imoveis"><a className="buttonVerMaisAptos">Ver mais imóveis</a></Link>

          </div>
        </div>
      </section>

      <section id="avaliacao">
        <div className="wrapper">
          <div className="container">
            <div className="contentAvaliacao">
              <button>Proprietário</button>
              <h3>Ajudamos a vender seu imóvel</h3>


              <Link href="https://wa.me/5511987654321" target="_blank">
                <a className="buttonAvaliacao"> Solicite uma avaliação</a></Link>


            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop onscroll={Show} />

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:8080/destaques');
  const data = await response.json();

  return {
    props: {
      destaques: data,
    },
    revalidate: 10
  }
};
