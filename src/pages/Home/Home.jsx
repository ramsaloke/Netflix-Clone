import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import hero_player from "../../assets/Play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul <br></br> embarks on a quest to save the city
            from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={hero_player} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards></TitleCards>
        </div>
      </div>
      <div className="more-cards"> 
        <TitleCards title={"Blockbuster Movies"}></TitleCards>
        <TitleCards title={"Only on Netflix"}></TitleCards>
        <TitleCards title={"Upcoming"}></TitleCards>
        <TitleCards title={"Topics for you"}></TitleCards>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;