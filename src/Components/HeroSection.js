import React, { useState } from "react";

import Slider from "react-slick";

import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {

  const [selected, setSelected] = useState("TR");

  const alankodlari = {
    US: '+1',
    DE:'+50',
    TR:'+90',
    FR:'+42'
  }


  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" alt="resim1" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"/>
          </div>

          <div>
           <img className="w-full h-[500px] object-cover" alt="resim2" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"/>
          </div>
        </Slider>

        <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="resim3"></img>
            <h3 className="mt-8 text-4xl font-semibold text-white">Dakikalar içinde <br/> kapınızda</h3>
          </div>

          <div className="w[w-400px] rounded-lg bg-gray-50 p-6">
            
            <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>

            <div className="flex gap-x-2">
              
              <ReactFlagsSelect
                countries={Object.keys(alankodlari)}
                customLabels={alankodlari}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="cursor-pointer flex-1 relative block">
                <input required className="h-14 px-4 border-2 border-gray-200 hover:border-primary-brand-color focus:border-primary-brand-color transition-colors rounded w-full outline-none peer text-sm pt-2"/>
                <span className=" absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-5 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs transition-all">Telefon Numarası</span>
              </label>
              
            </div>
            
            <button className="cursor-pointer bg-third-brand-color text-primary-brand-color hover:bg-primary-brand-color hover:text-third-brand-color transition-all rounded font-semibold p-4 mt-4 w-full">Telefon numarası ile devam et</button>


          </div>
        </div>
    </div>
  )
}
