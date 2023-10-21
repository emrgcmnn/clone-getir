import BanImg from './img/bannerimg.png'

export default function MobileApp() {
  return (
    <div className=" bg-primary-brand-color flex items-center justify-between h-80 my-6 rounded-lg">
      
      <div className=' ml-12 w-1/2 grid grid-cols-1 gap-y-6'>
        <div className=' h-26'>
          <h1 className=' font-bold text-white text-3xl'>Getir'i indirin!</h1></div>
        <div className=' h-26'>
          <h2 className=' font-semibold text-white text-2xl'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</h2>
        </div>
        <div className='h-26 grid grid-cols-3'>
          <div>
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="appstore"/>
          </div>
          <div>
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="googleplay"/>
          </div>
          <div>
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="huaweiapp"/>
          </div>
        </div>
      </div>

      <div className='relative w-1/2 h-80 flex justify-end overflow-hidden'>
        <img src={BanImg} alt="bannerimg" className='min-w-full min-h-full object-cover'/>
      </div>

    </div>
  )
}
