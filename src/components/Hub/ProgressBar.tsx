import * as S from "./Hub.styles";

interface IProgressBarProps {
  totalRecoveredQuantity: number;
  unassignedQuantityTotal: number;
  recoveredQuantityUnit: string;
}

const formatQuantityWithUnit: (quantity: number, unit: string) => string = (
  quantity,
  unit
) => {
  return `${quantity.toFixed(0)} ${unit?.toLocaleLowerCase()}`;
};

const calculateAchievedPercentage: (
  achieved: number,
  remains: number
) => number = (achieved, remains) => {
  const result = Math.floor((achieved * 100) / (achieved + remains)) ?? 0;
  debugger;
  return result;
};

export const ProgressBar: React.FC<IProgressBarProps> = ({
  totalRecoveredQuantity,
  unassignedQuantityTotal,
  recoveredQuantityUnit,
}) => {
  return !!totalRecoveredQuantity ? (
    <S.BarContainer>
      <S.BarAchieved
        percents={calculateAchievedPercentage(
          totalRecoveredQuantity,
          unassignedQuantityTotal
        )}
      >
        {formatQuantityWithUnit(totalRecoveredQuantity, recoveredQuantityUnit)}
      </S.BarAchieved>
      {!!unassignedQuantityTotal && (
        <S.BarRemains>
          {" "}
          {formatQuantityWithUnit(
            unassignedQuantityTotal,
            recoveredQuantityUnit
          )}
        </S.BarRemains>
      )}
    </S.BarContainer>
  ) : null;
};
