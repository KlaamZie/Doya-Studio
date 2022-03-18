import React, { useEffect } from "react";
import Image from "next/image";
import { GraphQlResponse } from "../lib/datocms/types";

type data = {
  team: GraphQlResponse.Presentation;
};

const Equipe = ({ team }: data) => {
  useEffect(() => {
    const titleTarget = document.querySelector(".equipe");
    const titles = document.querySelectorAll(".equipe_title");
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

    const imageTarget = document.querySelectorAll(".equipe_portrait_container");

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target?.firstElementChild?.classList.add("intersecting");
          } else {
            entry.target?.firstElementChild?.classList.remove("intersecting");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    if (imageTarget) {
      imageTarget.forEach((el) => {
        imageObserver.observe(el);
      });
    }

    return () => {
      titleObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);
  return (
    <>
      <section className="equipe wrapper" id="equipe">
        <div>
          {team.titre.map((el) => {
            return (
              <h1 className="equipe_title title" key={el.id}>
                <span>{el.texte}</span>
              </h1>
            );
          })}
        </div>
        <div className="equipe_portrait">
          <div className="equipe_portrait_container">
            <div className="equipe_portrait_wrapper even">
              <Image
                src={team.personne[0].image.url}
                layout="responsive"
                alt={team.personne[0].image.alt}
                height={125}
                width="100%"
                objectFit={"cover"}
              />
              <div className="equipe_portrait_presentation">
                <h2>{team.personne[0].nom}</h2>
                <p>{team.personne[0].competence}</p>
              </div>
            </div>
          </div>
          <div className="equipe_portrait_container">
            <div className="equipe_portrait_wrapper odd">
              <Image
                src={team.personne[1].image.url}
                layout="responsive"
                alt={team.personne[1].image.alt}
                height={125}
                width="100%"
                objectFit={"cover"}
              />
              <div className="equipe_portrait_presentation">
                <h2>{team.personne[1].nom}</h2>
                <p>{team.personne[1].competence}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipe;
