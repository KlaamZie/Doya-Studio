import React, { useEffect } from "react";
import Image from "next/image";

const Equipe = () => {
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
    };
  }, []);
  return (
    <>
      <section className="equipe">
        <div>
          <h1 className="equipe_title">
            <span>professionel.</span>
          </h1>
          <h1 className="equipe_title">
            <span>pas drole.</span>
          </h1>
          <h1 className="equipe_title">
            <span>puducu.</span>
          </h1>
        </div>
        <div className="equipe_portrait">
          <div className="equipe_portrait_container">
            <div className="equipe_portrait_wrapper even">
              <Image
                src="/portrait.jpg"
                layout="responsive"
                alt=""
                height={125}
                width="100%"
                objectFit={"cover"}
              />
              <div className="equipe_portrait_presentation">
                <h2>Clarence le noir</h2>
                <p>Blabla Blabla Blabla</p>
              </div>
            </div>
          </div>
          <div className="equipe_portrait_container">
            <div className="equipe_portrait_wrapper odd">
              <Image
                src="/portrait2.jpg"
                layout="responsive"
                alt=""
                height={125}
                width="100%"
                objectFit={"cover"}
              />
              <div className="equipe_portrait_presentation">
                <h2>Théo la brute</h2>
                <p>Blabla Blabla Blabla</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipe;
