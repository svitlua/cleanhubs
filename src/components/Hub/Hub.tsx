import React from "react";
import * as S from "./Hub.styles";
import { ProgressBar } from "./ProgressBar";

interface IHub {
  uuid: string;
  displayName: string;
  cardDescription: string;
  cardImage: {
    directLink: string;
    thumbnailDirectLink: string;
  };
  location: string;
  logo: {
    directLink: string;
    thumbnailDirectLink: string;
  };
  recoveredQuantity: number;
  totalRecoveredQuantity: number;
  unassignedQuantityTotal: number;
  recoveredQuantityUnit: string;
}

interface IHubProps {
  data: IHub;
}

export const Hub: React.FC<IHubProps> = ({ data }) => {
  const {
    displayName,
    cardDescription,
    logo,
    location,
    totalRecoveredQuantity,
    unassignedQuantityTotal,
    recoveredQuantityUnit,
  } = data;
  console.log(data);
  return (
    <S.Wrapper>
      <S.Logo src={`${logo?.directLink}`} alt={`${displayName} logo`} />
      <S.Divider />
      <S.Title>Partner</S.Title>
      <S.HubName>{displayName}</S.HubName>
      <ProgressBar
        totalRecoveredQuantity={totalRecoveredQuantity}
        unassignedQuantityTotal={unassignedQuantityTotal}
        recoveredQuantityUnit={recoveredQuantityUnit}
      />
      {location && (
        <>
          <S.Title>Location</S.Title>
          <S.InfoText>{location}</S.InfoText>
        </>
      )}
      <S.InfoText>{cardDescription}</S.InfoText>
    </S.Wrapper>
  );
};
