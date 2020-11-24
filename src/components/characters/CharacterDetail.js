import React from "react";
import "../../stylesheets/CharacterDetail.scss";

const ChracterDetail = (props) => {
  return (
    <div className="modal">
      <div className="characterModal">
        <img
          className="characterModal__img"
          src={props.image}
          alt={props.name}
        />
        <div className="characterModal__description">
          <span className="characterModal__description--name">
            <h3>{props.name}</h3>
          </span>
          <div className="characterModal__description--box">
            <span className="species">
              <h4>Especie:</h4>
              <p>{props.species}</p>
            </span>
            <span className="origin">
              <h4>Origen:</h4>
              <p>{props.origin}</p>
            </span>
            <span className="status">
              <h4>Status:</h4>
              <p>{props.status}</p>
            </span>
            <span className="episode">
              <h4>Episodios:</h4>
              <p>{props.episodes}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChracterDetail;
