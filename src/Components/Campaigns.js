
import Slider from "react-slick";
import Banners from '../api/banners.json'
import { useEffect, useState } from "react";

export default function Campaigns() {

const [banners, setBanners] = useState ([]);

  useEffect (()=>{
    setBanners(Banners);
  },[]);

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <div className="container mx-auto h-96">
      <Slider className="-mx-2 relative" {...settings}>
					{banners && banners.map(banner => (
						<div key={banner.id} className="px-2">
							<img src={banner.image} className="w-full sm:rounded-lg" />
						</div>
					))}
				</Slider>
    </div>
  )
}
