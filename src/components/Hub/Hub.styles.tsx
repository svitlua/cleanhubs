import styled from "styled-components";

const primaryColor = "#1981ff";
const textColor = "rgba(0, 0, 0, 0.87)";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  padding: 0 24px;
  min-width: 400px;
  max-width: 500px;
  box-sizing: border-box;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 -1px 4px 0 rgba(25, 32, 36, 0.04),
    0 3px 6px 0 rgba(25, 32, 36, 0.16);
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: degular, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: ${primaryColor};
`;

export const InfoText = styled.div`
  font-family: degular, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${textColor};
  margin-bottom: 16px;
`;

export const HubName = styled(InfoText)`
  font-weight: 600;
`;

export const Logo = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  margin-bottom: 24px;
`;

export const Divider = styled.div`
  margin-bottom: 24px;
  border-top: 1px solid rgb(25, 129, 255);
`;

export const BarContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  font-family: degular-display, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  white-space: nowrap;
`;

export const BarAchieved = styled.div<{ percents: number }>`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  background-color: #284ab7;
  flex-basis: ${(props) => props.percents}%;
`;

export const BarRemains = styled.div`
  display: flex;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  background-color: #1981ff;
  flex: 1;
`;
