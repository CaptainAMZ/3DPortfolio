import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC/SectionWrapper";
import { slideIn } from "../utils/motion";

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
    e.preventDeafault();
    setLoading(true);

    // template_pb0yuvn
    // service_084st7n
    // 1QSszHK9AUod7TYL4

    emailjs
      .send(
        "service_084st7n",
        "template_pb0yuvn",
        {
          from_name: form.name,
          to_name: "Alireza",
          from_email: form.email,
          to_email: "alirezamohammadizavele@gmail.com",
          message: form.message,
        },
        "1QSszHK9AUod7TYL4"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you , I will get to you ASAP");
        setForm({ name: "", email: "", message: "" });
      } , (error => {
        setLoading(false)
        console.log(error);
        alert("Somthing went wrong")
      }));
  };

  return (
    <div
      className="
      flex 
      flex-col-reverse 
      gap-10
      overflow-hidden
      xl:mt-12
      xl:flex-row
       "
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="
          mt-12
          flex
          flex-col
          gap-8
          "
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="
              rounded-lg
              border-none
              bg-tertiary
              px-6
              py-4
              font-medium
              text-white
              outline-none
              placeholder:text-secondary
              "
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="
              rounded-lg
              border-none
              bg-tertiary
              px-6
              py-4
              font-medium
              text-white
              outline-none
              placeholder:text-secondary
              "
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="
              rounded-lg
              border-none
              bg-tertiary
              px-6
              py-4
              font-medium
              text-white
              outline-none
              placeholder:text-secondary
              "
            />
          </label>
          <button
            type="submit"
            className="
          w-fit
          rounded-xl
          bg-tertiary
          px-8
          py-3
          font-bold
          text-white
          shadow-md
          shadow-primary
          outline-none
          "
          >
            {loading ? "Sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="
      h-[350px]
      md:h-[550px]
      xl:h-auto
      xl:flex-1
      "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
