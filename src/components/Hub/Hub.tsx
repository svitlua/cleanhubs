import React from "react";
import { IHub } from "../../utils";
import * as S from "./Hub.styles";
import { ProgressBar } from "./ProgressBar";

interface IHubProps {
  data: IHub;
}

const HUB_SITE = "https://test.cleanhub.com/hub";

export const Hub: React.FC<IHubProps> = ({ data }) => {
  const {
    displayName,
    cardDescription,
    logo,
    location,
    totalRecoveredQuantity,
    unassignedQuantityTotal,
    recoveredQuantityUnit,
    slug,
    parentHubName,
  } = data;

  return (
    <S.Wrapper
      onClick={() =>
        window.open(`${HUB_SITE}/${slug}`, "_blank", "noopener,noreferrer")
      }
    >
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
      {parentHubName && (
        <>
          <S.Title>Parent Hub</S.Title>
          <S.InfoText>{parentHubName}</S.InfoText>
        </>
      )}
      <S.InfoText>{cardDescription}</S.InfoText>
    </S.Wrapper>
  );
};
