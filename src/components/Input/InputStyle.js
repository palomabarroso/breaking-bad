import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const Input = styled.input`
  height: 48px;
  width: 250px;
  border: 2px solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  background: #000;
  border-color: #ddd;
  color: #fff;
  padding-right: 25px;

  &focus {
    border-color: none;
    outline: 0;
  }
`;

export const Icon = styled.i`
  color: #fff;
  right: 5px;
  position: absolute;
`;
