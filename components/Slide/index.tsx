import React, { useState } from 'react'
import Sliders from './sliders'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

function Slide() {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    }
  })

  function Arrow( props ) {
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
      <div>
        <div ref={sliderRef} className="keen-slider">
          {Sliders.map(slide => {
            return (
              <div key={slide.id} className="slide">
                <div>
                  <div className="fader__slide keen-slider__slide">
                    <img src={slide.img} alt="teste" />
                  </div>
                </div>
                <div>
                  <p className="textDiv">Destaque</p>
                </div>
              </div>
            )
          })}

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={e =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />

              <Arrow
                onClick={e =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Slide
