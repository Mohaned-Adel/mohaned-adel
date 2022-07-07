import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination  } from "swiper";

import './References.css'
const References = () => {
    return (
        <section id="#references" className="SectionSlice is-sticky SliceRef">
            <Swiper className="ref__content"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}>
                <SwiperSlide className="ref__article">
                    <h3>Building Games</h3>
                    <p>Advanced Experience using JavaScript concepts such as (Higher order functions, callback functions and closures). Also having a good understanding of JavaScript ES6 features such as (Arrow functions, destructuring, Template literals and Promises). Using all of that to build amazing and awesome games and applications</p>
                </SwiperSlide>
                <SwiperSlide className="ref__article">
                    <h3>Creating Apps</h3>
                    <p>Advanced Experience using ReactJs concepts such as (class and functional components, React Router and Hooks). Also having a good understanding of Redux. Using all of that to build amazing and awesome applications and Templates</p>
                </SwiperSlide>
                <SwiperSlide className="ref__article">
                    <h3>Templates Ninja</h3>
                    <p>Creating responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using Bootstrap, SASS, JavaScript and HTML</p>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default References;