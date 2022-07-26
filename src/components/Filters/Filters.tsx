import { useMemo } from "react";
import { FilterFields, IFiltersType, SHOW_ALL, STAGE } from "../../utils";
import * as S from "./Filters.styles";

interface IFiltersProps {
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  maxUnassignedAmount: number;
  countries: string[];
  filters: IFiltersType;
}

const stageOptions = [
  {
    value: SHOW_ALL,
    label: "Show All",
  },
  {
    value: STAGE.Pilot,
    label: "Pilot",
  },
  {
    value: STAGE.FullyOnboarded,
    label: "Fully Onboarded",
  },
];

export const Filters: React.FC<IFiltersProps> = ({
  onChange,
  maxUnassignedAmount,
  countries,
  filters,
}) => {
  const countryOptions = useMemo(() => {
    return [
      {
        value: SHOW_ALL,
        label: "Show All",
      },
      ...countries.map((country) => {
        return { value: country, label: country };
      }),
    ];
  }, [countries]);

  return (
    <S.Container>
      <div>
        <input
          type="checkbox"
          id="checkbox-filter"
          name={FilterFields.Assignable}
          checked={filters[FilterFields.Assignable]}
          onChange={onChange}
        />
        <S.Label htmlFor="checkbox-filter">Assignable</S.Label>
      </div>
      <S.Input
        type="text"
        name={FilterFields.DisplayName}
        onChange={onChange}
        placeholder="Search by name"
      />
      <div>
        <S.Label>Stage</S.Label>
        <S.Select
          onChange={onChange}
          name={FilterFields.Stage}
          placeholder="Select Stage"
          value={filters[FilterFields.Stage]}
        >
          {stageOptions.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </S.Select>
      </div>

      <div>
        <S.Label>Unassigned Quantity: {filters[FilterFields.UnassignedQuantityTotal]} kg</S.Label>
        <S.RangeInput
          name={FilterFields.UnassignedQuantityTotal}
          type="range"
          min="0"
          max={maxUnassignedAmount}
          value={filters[FilterFields.UnassignedQuantityTotal]}
          onChange={onChange}
        />
      </div>
      <div>
        <S.Label>Country</S.Label>
        <S.Select onChange={onChange} name={FilterFields.Location}>
          {countryOptions.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </S.Select>
      </div>
    </S.Container>
  );
};
