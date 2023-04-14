
import './App.css';
import PreNavbar from './componets/PreNavbar';
import Navbar from "./componets/Navbar.js";
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from "./componets/Slider.js"
import data from "./data/data.json"
import Offers from "./componets/Offers.js"
import Heading from "./componets/Heading.js";
import StarProduct from "./componets/StarProduct.js";
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"

function App() {
  return (
    <Router>
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
      
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT "></Heading>
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIS "></Heading>
      <HotAccessoriesMenu></HotAccessoriesMenu>
      <Heading text="PRODUCT REVIEWS "></Heading>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading  text="IN THE PRESS"/>
      <Banner  banner={data.banner}/>
      <Footer footer={data.footer} />
    </Router>
    
  );
}

export default App;
