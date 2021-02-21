import React from "react";
import * as S from "./CardStyle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
//import star from './star.svg';

const Card = ({ name, nickname, birthday, status, image, occupation }) => (
  <S.Card>
    <S.Image src={image} alt={`${name} ${nickname}`}></S.Image>
    <S.Status status={status === `Alive`}>
      <p>{status}</p>
    </S.Status>
    <S.Info>
      <h3>{name}</h3>
      <S.Icon className="labelIcon">
        <FontAwesomeIcon icon={faStar} />
        <p>{birthday}</p>
      </S.Icon>
      <p>{occupation}</p>
    </S.Info>
  </S.Card>
);

export default Card;
