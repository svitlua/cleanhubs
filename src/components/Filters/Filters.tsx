import { useMemo, useState } from "react";
import { FilterFields, STAGE } from "../../utils";

interface IFiltersProps {
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  maxUnassignedAmount: number;
  countries: string[];
}

const stageOptions = [
  {
    value: "",
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
}) => {
  const [rangeValue, setRangeValue] = useState<string | number>(0);

  const countryOptions = useMemo(() => {
    return [
      {
        value: "",
        label: "Show All",
      },
      ...countries.map((country) => {
        return { value: country, label: country };
      }),
    ];
  }, [countries]);

  return (
    <div>
      <div>
        <label>Stage</label>
        <select onChange={onChange} name={FilterFields.Stage}>
          {stageOptions.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        name={FilterFields.DisplayName}
        onChange={onChange}
        placeholder="Search by name"
      />
      <div>
        <input
          type="checkbox"
          id="checkbox-filter"
          name={FilterFields.Assignable}
          onChange={onChange}
        />
        <label htmlFor="checkbox-filter">Assignable</label>
      </div>
      <div>
        <input
          name={FilterFields.UnassignedQuantityTotal}
          type="range"
          min="0"
          max={maxUnassignedAmount}
          value={rangeValue}
          onChange={(event) => {
            onChange(event);
            setRangeValue(event.target.value);
          }}
        />
        {rangeValue}kg
      </div>
      <div>
        <label>Country</label>
        <select onChange={onChange} name={FilterFields.Location}>
          {countryOptions.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
