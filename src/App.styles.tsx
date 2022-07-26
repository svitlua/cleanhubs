import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #1981ff;
  width: 60px;
  height: 60px;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
  margin: auto;
  position: absolute;
  top: 50%;
  margin-top: -30px;
  left: 50%;
  margin-left: -30px;
`;

export const HubsWrapper = styled.div`
  //   display: flex;
  //   column-gap: 24px;
  //   row-gap: 24px;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export const Container = styled.div`
  padding: 60px;
`;

export const Header = styled.div`
  font-family: degular, sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #284ab7;
  margin-bottom: 40px;
`;
