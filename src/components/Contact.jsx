import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { coder } from "../assets";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
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
    // template_31a813f
    // service_hrw8wg4
    // 0S-8aw6Zl7Ex2Xewm
    emailjs
      .send(
        "service_hrw8wg4",
        "template_31a813f",
        {
          from_name: form.name,
          to_name: "vinayak",
          from_email: form.email,
          to_email: "vinayakkhetmalis7@gmail.com",
          message: form.message,
        },
        "0S-8aw6Zl7Ex2Xewm"
      )
      .then(
        () => {
          setLoading(false);
          alert("done!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("error");
          alert("error");
        }
      );
  };
  return (
    <section
      id="contact"
      className=" flex md:flex-row flex-col px-8 justify-center gap-8"
    >
      <div className="shadow-md md:w-6/12">
        <div className="md:mx-20 p-8 h-min  rounded-2xl border-2 ">
          <p className=" happy-font font-bold">get in touch</p>
          <p className=" text-5xl font-bold">CONTACT ME</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-gray-500 font-medium mb-4">Your Name</span>
              <input
                placeholder="whats your name?"
                onChange={handleChange}
                value={form.name}
                className=" dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4 placeholder:text-primary roundes-lg outlined-none  border-none font-medium"
                type="text"
                name="name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-500 font-medium mb-4">Your Email</span>
              <input
                placeholder="enter your email here"
                onChange={handleChange}
                value={form.email}
                className=" dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4 placeholder:text-primary roundes-lg outlined-none  border-none font-medium"
                type="email"
                name="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-500 font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={5}
                placeholder="write message here"
                onChange={handleChange}
                value={form.message}
                className=" dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4 placeholder:text-primary roundes-lg outlined-none  border-none font-medium"
                name="message"
              />
            </label>
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sm px-5 py-2.5 text-center me-2 mb-2 font-bold rounded-full happy-font"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      <div className=" md:w-6/12">
        <img className="rounded-3xl" src={coder} alt="" />
      </div>
    </section>
  );
};

export default Contact;
