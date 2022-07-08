import IMG1 from "../../assets/images/memory-game.png";
import IMG2 from "../../assets/images/myreads.png";
import IMG3 from "../../assets/images/todo.png";
import "./Projects.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Projects = () => {
  return (
    <section className="SectionSlice SliceProjects">
      <h2>Projects</h2>
      <p>
        Swipe or drag below to see a small selection of projects I've worked on
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        modules={[FreeMode,Pagination]} className="project__cards">
        {/* <ul className="cards__list"> */}
          <SwiperSlide className="card__item">
            <a href="#" className="project__card">
              <img src={IMG1} alt="memory-game" className="card__image" />
              <div className="card__info">
                <h3>Memory Game</h3>
                <p>Playing a memory card game</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="card__item">
            <a href="#" className="project__card">
              <img src={IMG1} alt="memory-game" className="card__image" />
              <div className="card__info">
                <h3>Memory Game</h3>
                <p>Playing a memory card game</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="card__item">
            <a href="#" className="project__card">
              <img src={IMG1} alt="memory-game" className="card__image" />
              <div className="card__info">
                <h3>Memory Game</h3>
                <p>Playing a memory card game</p>
              </div>
            </a>
          </SwiperSlide>
        {/* </ul> */}
      </Swiper>
    </section>
  );
};

export default Projects;
