import "./About.css";

const About = () => {
  return (
    <section id="about" className="SectionSlice SliceText">
      <div className="about__content">
        <h2>About me</h2>
        <h3>
          I enjoy working closely with design teams to faithfully translate
          their designs right down to the last pixel. Daily, you'll find me
          using modern frontend technologies that bring the creative process to
          life just as designers intended them to be.
        </h3>
        <h4>Technical</h4>
        <p>
          Right now you can find me hacking away primarily with ReactJs, ReduxJs
          and in general anything JavaScript, HTML and CSS related. Also
          building templates and applications using ReactJs, Creating games
          using JavaScript
        </p>
        <h4>Personal</h4>
        <p>
          I born in Alexandria, Egypt so by nature I'm related to football. Also
          I'm a good Fifa player as well &#128516;
        </p>
      </div>
    </section>
  );
};

export default About;
