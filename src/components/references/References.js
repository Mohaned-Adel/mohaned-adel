import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import "./References.css";

const References = () => {
    const [referenceData, setReferenceData] = useState([]);

  async function getReferencesData() {
    const res = await fetch("js/data.json");
    const data = await res.json();

    const references = data.references;

    // console.log(skills);

    setReferenceData(references);
  }

  useEffect(() => {
    getReferencesData();
  }, []);
  const referenceList = referenceData.map((reference) => {
    return (
      <SwiperSlide key={reference.id} className="ref__article">
        <h3>{reference.title}</h3>
        <p>
          {reference.description}
        </p>
      </SwiperSlide>
    );
  });
  return (
    <section id="references" className="SectionSlice SliceRef">
      <Swiper
        className="ref__content"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {referenceList}
      </Swiper>
    </section>
  );
};

export default References;
