import React, { useEffect, useState } from "react";
import AllReal from "./AllReal";
import { GraphQlResponse } from "../lib/datocms/types";

const Real: (props: {
  reals: GraphQlResponse.Project[];
}) => JSX.Element = (props: { reals: GraphQlResponse.Project[] }) => {
  const [displayed, setDisplayed] = useState({} as GraphQlResponse.Project);

  useEffect(() => {
    const titleTarget = document.querySelector(".real");
    const titles = document.querySelectorAll(".real_title");
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

  const handleClick: () => void = () => {
    const el = document.getElementsByClassName("allReal");
    document.body.classList.toggle("stop-scroll");
    el[0].classList.toggle("visible");
  };

  const displayReal = (element: GraphQlResponse.Project) => {
    if (element.id) setDisplayed(element);

    const el = document.getElementsByClassName("oneReal");
    document.body.classList.toggle("stop-scroll");
    el[0].classList.toggle("visible");
  };

  return (
    <>
      <section className="real wrapper" id="real">
        <h1 className="real_title title">
          <span>Nos réalisations</span>
        </h1>
        <div className="real_grid">
          {props.reals.map((el) => {
            return (
              <article
                className="real_grid_item_container"
                key={el.id}
                style={{ backgroundImage: `url('${el.image.url}')` }}
                onClick={() => displayReal(el)}
              >
                <div className="real_grid_item_content">
                  <p>{el.nom}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="real_all">
          <button className="real_all_button" onClick={() => handleClick()}>
            Voir toutes nos réalisations
          </button>
        </div>
      </section>
      <AllReal
        handleClick={handleClick}
        displayReal={displayReal}
        reals={props.reals}
        displayed={displayed}
      />
    </>
  );
};

export default Real;
