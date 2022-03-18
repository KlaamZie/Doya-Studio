import React, { useEffect, useState } from "react";
import { GraphQlResponse } from "../lib/datocms/types";
import { StructuredText } from "react-datocms";

type data = {
  skills: GraphQlResponse.Competence[];
};

const Skills = ({ skills }: data) => {
  const [item, setItem] = useState(0);

  useEffect(() => {
    const titleTarget = document.querySelector(".skills");
    const titles = document.querySelectorAll(".skills_title");
    const titleObserver = new IntersectionObserver(
      (entries) => {
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
      },
      {
        threshold: 0.15,
      }
    );

    if (titleTarget) titleObserver.observe(titleTarget);

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  const handleNext = () => {
    const el = document.getElementsByClassName("skills_item");
    if (el && item < el.length - 1) {
      el[item + 1].classList.toggle("visible");
      setItem(item + 1);
    }
  };

  const handlePrev = () => {
    const el = document.getElementsByClassName("skills_item");
    if (el && item > 0) {
      el[item].classList.toggle("visible");
      setItem(item - 1);
    }
  };

  return (
    <>
      <section className="skills wrapper" id="skills">
        <h1 className="skills_title title">
          <span>Nos compétences</span>
        </h1>
        <div className="skills_wrapper">
          {skills.map((el, i) => {
            return (
              <div
                className={`skills_item ${i === 0 ? "visible" : ""}`}
                style={{ backgroundImage: `url('${el.image.url}')` }}
                key={el.id}
              >
                <h2>{el.titre}</h2>
                <section>
                  <h2>{el.titre}</h2>
                  <article>
                    <StructuredText data={el.contenu} />
                  </article>
                </section>
              </div>
            );
          })}
        </div>
        <div className="skills_nav">
          <button className="skills_nav_button" onClick={() => handlePrev()}>
            {"<"} Précédent
          </button>
          <button className="skills_nav_button" onClick={() => handleNext()}>
            Suivant {">"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Skills;
