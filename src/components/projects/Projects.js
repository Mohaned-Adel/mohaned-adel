import "./Projects.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useEffect, useState } from "react";

const Projects = () => {
  const [Projects, setProjects] = useState([]);

  async function getProjects() {
    const response = await fetch(`js/data.json`);
    const data = await response.json();

    const projectsResponse = data.projects;

    setProjects(projectsResponse);
  }

  useEffect(() => {
    getProjects();
  }, []);

  const projectsList = Projects.map((project, index) => {
    return (
      <SwiperSlide key={index} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={project.image} alt="Project Template" />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="portfolio__item-cta">
          <a
            href={project.github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href={project.demo}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <section id="projects" className="SectionSlice SliceProjects">
      <h2>Projects</h2>
      <p>
        Swipe or drag below to see a small selection of projects I've worked on
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="project__cards"
      >
        {projectsList}
      </Swiper>
    </section>
  );
};

export default Projects;
