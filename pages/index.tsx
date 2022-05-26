import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Cards from '../components/Cards'
import BackToTop from '../components/BackTop'

function Home() {
  const [Scroll, setScroll] = useState(false)
  const [Show, setShow] = useState(false)

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

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site sobre ..." />
        <meta name="author" content="João Andrade" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <title> João Andrade </title>
      </Head>

      <Navigation onscroll={Scroll} />
      <Cards/>
      <Contact/>
      <Footer/>
      <BackToTop onscroll={Show}/>

    </div>
  )
}

export default Home
