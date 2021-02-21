import React from "react";
import * as S from "./InputStyle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputSearch = ({ type, onChange, value, placeholder, ...props }) => {
  return (
    <S.Container>
      <S.Input type={type} placeholder={placeholder} value={value} onChange={onChange}></S.Input>
      <S.Icon>
        <FontAwesomeIcon icon={faSearch} className="" />
      </S.Icon>
    </S.Container>
  );
};

export default InputSearch;
