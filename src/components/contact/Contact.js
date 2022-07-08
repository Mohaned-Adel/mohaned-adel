import "./Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mskbfd",
        "template_9zycvyo",
        form.current,
        "0GJN0GcskqD8CswDl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section className="SectionSlice is-sticky ContactSlice">
      <div className="contact__content">
        <h1>Contact me</h1>
        <h3>Don't be shy!</h3>
        <p>
          If you have a project in mind or you would like to say hello just send
          me an email
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
