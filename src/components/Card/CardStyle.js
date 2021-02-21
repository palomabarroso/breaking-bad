import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  position: relative;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.562);
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 0;
  min-width: 50%;
  height: 30px;
  background-color: aqua;

  ${({ status }) =>
    status
      ? css`
          background-color: #29773e;
        `
      : css`
          background-color: #fa7821;
        `}
`;

export const Info = styled.div`
  position: absolute;
  margin: 5px;
  bottom: 10px;
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
`;
