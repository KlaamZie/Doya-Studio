import React from "react";
import OneReal from "./OneReal";
import { GraphQlResponse } from "../lib/datocms/types";

type data = {
  handleClick: () => void;
  displayReal: (element: GraphQlResponse.Project) => void;
  reals: GraphQlResponse.Project[];
  displayed: GraphQlResponse.Project;
};
const AllReal = ({ handleClick, displayReal, reals, displayed }: data) => {
  return (
    <>
      <div className="allReal">
        <div className="allReal_close">
          <button
            onClick={() => handleClick()}
            className="allReal_close_button"
          >
            Retour
          </button>
        </div>
        <div className="real_grid">
          {reals.map((el) => {
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
      </div>
      <OneReal displayReal={displayReal} real={displayed} />
    </>
  );
};

export default AllReal;
