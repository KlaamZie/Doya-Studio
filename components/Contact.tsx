import React, { useEffect } from "react";

type data = {
  mail: string;
  phone: string;
};

const Contact = ({ mail, phone }: data) => {
  useEffect(() => {
    const titleTarget = document.querySelector(".contact");
    const titles = document.querySelectorAll(".contact_title");
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titles.forEach((title) => {
            title?.firstElementChild?.classList.add("intersecting");
          });
        } else {
          titles.forEach((title) => {
            title?.firstElementChild?.classList.remove("intersecting");
          });
        }
      });
    });

    if (titleTarget) titleObserver.observe(titleTarget);

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="contact wrapper" id="contact">
        <h1 className="contact_title title">
          <span>Contact</span>
        </h1>
        <div className="contact_wrapper">
          <a href="" className="contact_link">
            <i className="fa-solid fa-envelope" aria-hidden />
            <span>{phone}</span>
          </a>
          <a href="" className="contact_link">
            <i className="fa-solid fa-phone" aria-hidden />
            <span>{mail}</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
