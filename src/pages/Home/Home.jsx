import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { REQUEST_RESOLVED } from "utils/constants/request";
import { CharactersActions } from "store/ducks/characters";

import Card from "components/Card";
import Input from "components/Input";
//import Logo from "assets/logo.svg";

import "react-toastify/dist/ReactToastify.css";
import * as S from "./HomeStyle.js";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { characters } = useSelector(({ characters }) => characters);

  useEffect(() => {
    dispatch(CharactersActions.requestCharacters());
  }, [dispatch]);

  return (
    <S.Container>
      <ToastContainer />
      <S.Header>
        {/* <Logo /> */}
        <Input value={inputValue} onChange={({ target }) => setInputValue(target.value)} />
      </S.Header>
      <S.CardContainer>
        <h2>Personagens</h2>
        {characters.requestStatus === REQUEST_RESOLVED && (
          <S.CardGrid>
            {characters.requestResponse.map(
              ({ char_id, name, nickname, birthday, status, img, occupation }) => (
                <Card
                  key={char_id}
                  image={img}
                  status={status}
                  name={name}
                  nickname={nickname}
                  birthday={birthday}
                  occupation={occupation}
                />
              ),
            )}
          </S.CardGrid>
        )}
      </S.CardContainer>
    </S.Container>
  );
};

export default Home;
