tipoDinamicoNoComponente
;<div ref={sliderRef} className="keen-slider">
  <div className="fader__slide keen-slider__slide">
    <img src={data.img01} alt={data.alt01} />
  </div>
  <div className="fader__slide keen-slider__slide">
    <img src={data.img02} alt={data.alt02} />
  </div>
  <div className="fader__slide keen-slider__slide">
    <img src={data.img03} alt={data.alt03} />
  </div>
</div>





tipoDinamicoFull
;<div ref={sliderRef} className="keen-slider">
  {Sliders.map(slide => {
    return (
      <div key={slide.id}>
        <div className="fader__slide keen-slider__slide">
          <img src={slide.img} alt="teste" />
        </div>
      </div>
    )
  })}
</div>



;
<div>
  {data.filter(imoveis => imoveis.tipo === 'apartamento').map(imoveisFiltrados => (
    <div key={imoveisFiltrados.id}>
      <li>{imoveisFiltrados.tipo}</li>
   </div>
  ))}
</div>