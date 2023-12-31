import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  discord,
  githubMedsos,
  instagram,
  linkedin,
  mail,
  twitter,
} from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
const EMAILJS_API = process.env.EMAILJS_API;
// const EMAILJS_API = "null";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "noreply@liupurnomo.com",
        "template_1",
        {
          from_name: form.name,
          to_name: "Liu Purnomo",
          from_email: form.email,
          to_email: "hi@liupurnomo.com",
          message: form.message,
        },
        EMAILJS_API
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  p-8 rounded-2xl"
      >
        <center>
          <a href="mailto:hi@liupurnomo.com" target="_blank">
            <img
              src={mail}
              alt=""
              width={75 + "%"}
              //margin button 4, when screen is small will be 8, and when screen is large will be 4
              className="mb-4"
            />
          </a>
          <a href="https://linkedin.com/in/liupurnomo" target="_blank">
            <img src={linkedin} alt="" width={75 + "%"} className="mb-4" />
          </a>
          <a href="https://github.com/liu-purnomo" target="_blank">
            <img src={githubMedsos} alt="" width={75 + "%"} className="mb-4" />
          </a>
          <a href="https://twitter.com/liupurnomo" target="_blank">
            <img src={discord} alt="" width={75 + "%"} className="mb-4" />
          </a>
          <a href="https://instagram.com/liupurnomo" target="_blank">
            <img src={instagram} alt="" width={75 + "%"} className="mb-4" />
          </a>
          <a href="https://twitter.com/liupurnomo" target="_blank">
            <img src={twitter} alt="" width={75 + "%"} className="mb-4" />
          </a>
        </center>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
