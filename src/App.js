import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Categories from './Components/Categories'
import Campaigns from './Components/Campaigns'
import Favorites from './Components/Favorites'
import MobileApp from './Components/MobileApp'
import Card from './Components/Card'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaigns/> 
      <div className="container mx-auto">
        <Favorites />
        <MobileApp />
        <Card />
      </div>
      <Footer/>
    </>
  );
}

export default App;
