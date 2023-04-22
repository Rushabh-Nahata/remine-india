import React, { useEffect, useState } from "react";
import "./SectionSeven.css";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css";
import "swiper/css/effect-cube";
// import "swiper/css/pagination";
import car from '../../assets/images/car.png'
import ac from '../../assets/images/air-conditioner.png'
import bike from '../../assets/images/motorbikee.png'
import phone from '../../assets/images/smartphone.png'
import tower from "../../assets/images/tower.png";
import atm from '../../assets/images/atm-machine.png'

function SectionSeven() {
  const [nCard, setNCard] = useState(4);

  const setNumCard = (n) => {
    if (window.innerWidth < 600) {
      setNCard(1);
    } else {
      setNCard(3);
    }
  };

  useEffect(() => {
    setNumCard(nCard);
    window.addEventListener("scroll", setNumCard);
  }, [nCard]);

  return (
    <div className="sectionSeven_container" id="section-seven">
      <div className="sectionSeven_header">
        <h1>Our Customer</h1>
      </div>
      <div className="sectionSeven_cardholders">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
          spaceBetween={0}
          slidesPerView={nCard}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={car} alt="Profile" />
              </div>
              <h2>TATA car</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={ac} alt="Profile" />
              </div>

              <h2>Hitachi AC</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={bike} alt="Profile" />
              </div>

              <h2>Hero Honda Bike</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={phone} alt="Profile" />
              </div>

              <h2>Samsung Phone</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={tower} alt="Profile" />
              </div>

              <h2>BSNL Tower</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_image">
                <img src={atm} alt="Profile" />
              </div>

              <h2>HDFC ATM</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SectionSeven;
