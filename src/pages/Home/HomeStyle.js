import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 80px 20px 80px;
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  max-width: 150px;
  height: auto;
`;

export const CardContainer = styled.div`
  margin-top: 50px;
  h2 {
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
