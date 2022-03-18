import React from "react";
import { GraphQlResponse } from "../lib/datocms/types";
import { StructuredText } from "react-datocms";
import Image from "next/image";

type data = {
  displayReal: (element: GraphQlResponse.Project) => void;
  real: GraphQlResponse.Project;
};

const OneReal = ({ displayReal, real }: data) => {
  if (!real.id) return <div className="oneReal" />;

  return (
    <div className="oneReal">
      <div className="oneReal_close">
        <button
          onClick={() => displayReal({} as GraphQlResponse.Project)}
          className="oneReal_close_button"
        >
          Retour
        </button>
      </div>
      <div className="oneReal_wrapper">
        <h1 className="oneReal_title oneReal_container">{real.nom}</h1>
        {real.youtube && (
          <div className="oneReal_video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${real.youtube}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <div className="oneReal_presta oneReal_container">
          <p className="oneReal_subtitle">Prestations</p>
          <ul className="oneReal_presta_list">
            {real.prestation.map((el) => {
              return <li key={el.id}>- {el.texte}</li>;
            })}
          </ul>
        </div>
        <div className="oneReal_container oneReal_desc">
          <p className="oneReal_subtitle">Description</p>
          <div className="oneReal_desc_wrapper">
            <StructuredText data={real.description} />
          </div>
        </div>
        <div className="oneReal_container oneReal_photos">
          <p className="oneReal_subtitle">Photos</p>
          <div className="oneReal_photos_wrapper">
            {real.photos.map((el) => {
              return (
                <div key={el.id} className="oneReal_photo">
                  <Image
                    src={el.url}
                    alt={el.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneReal;
