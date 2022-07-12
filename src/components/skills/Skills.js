import { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);

  async function getSkillsData() {
    const res = await fetch("js/data.json");
    const data = await res.json();

    const skills = data.skills;

    // console.log(skills);

    setSkillData(skills);
  }

  useEffect(() => {
    getSkillsData();
    console.log(skillData);
  }, []);

  const skillsList = skillData.map((skill, index) => {
    return (
      <li key={index} className="list__item">
        <p className="item__title">{skill.title}</p>
        <div className="item__desc">
          <h4>{skill.title}</h4>
          <p>{skill.description}</p>
        </div>
      </li>
    );
  });
  return (
    <section id="skills" className="SectionSlice SliceSkills">
      <ul className="skills__list">{skillsList}</ul>
    </section>
  );
};

export default Skills;
