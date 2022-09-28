import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="578866"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="57886689"
            title="Baseus Selfie Stick & Tripod Stand with Remote Control"
            price={49.99}
            image="https://www.mytrendyphone.eu/images/Baseus-Selfie-Stick-Tripod-Stand-with-Remote-Control-Red-Black-6953156286504-21082019-01-p.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="57886655"
            title="Buy iPad Pro - Apple"
            price={29.99}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000"
            rating={3}
          />
          <Product
            id="57886645"
            title="The lean startup"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="578866111"
            title="Samsung 65 Class RU7300 Curved Smart Tv"
            price={999.99}
            image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="46474754868"
            title="The Google Home"
            price={149.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5578/5578849_sd.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
