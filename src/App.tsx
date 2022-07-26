import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import * as S from "./App.styles";
import { Filters, Hub } from "./components";
import {
  FilterFields,
  FilterMatchType,
  FilterMatchTypeMap,
  HUBS_URL,
  IHub,
} from "./utils";

interface IFiltersType {
  [FilterFields.Assignable]?: boolean;
  [FilterFields.DisplayName]?: string;
  [FilterFields.Stage]?: string;
  [FilterFields.UnassignedQuantityTotal]?: string | number;
  [FilterFields.Location]?: string;
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hubs, setHubs] = useState<IHub[]>([]);
  const [filters, setFilters] = useState<IFiltersType>({[FilterFields.Assignable]: true});

  const fetchHubs = useCallback(async () => {
    try {
      setLoading(true);
      await axios.get(HUBS_URL).then((res) => {
        const { data } = res;
        setHubs(data);
      });
    } catch (error) {
      alert(`There was a problem while loading collection hub data:\n${error}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHubs();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]:
        event.target.name === FilterFields.Assignable
          ? (event.target as HTMLInputElement).checked
          : event.target.value,
    }));
  };

  const filteredHubs = useMemo(() => {
    const filterKeys = Object.keys(filters) as FilterFields[];
    const res = hubs.filter((hub) => {
      return filterKeys.every((key) => {
        const filterMatchType = FilterMatchTypeMap[key];
        if (filterMatchType === FilterMatchType.Exact) {
          return hub[key] === filters[key];
        } else if (filterMatchType === FilterMatchType.Partial) {
          return hub[key]
            ? (hub[key] as string)
                ?.toLowerCase()
                .includes((filters[key] as string).toLowerCase())
            : true;
        } else if (filterMatchType === FilterMatchType.Range) {
          return hub[key] >= parseInt(filters[key] as string);
        }
        return false;
      });
    });
    return res;
  }, [filters, hubs]);

  const maxUnassignedAmount = useMemo(() => {
    const unassignedArr = hubs.map((hub) => hub.unassignedQuantityTotal);
    return Math.max(...unassignedArr);
  }, [hubs]);

  const countries = useMemo(() => {
    const countriesArr = hubs
      .map((hub) => {
        return hub.location?.split(", ")[1];
      })
      .filter((country) => country);
    //@ts-ignore
    return [...new Set(countriesArr)];
  }, [hubs]);

  console.log(countries);

  return (
    <S.Container>
      {loading ? (
        <S.Loader />
      ) : (
        <>
          <S.Header>Collection Hubs</S.Header>
          <Filters
            onChange={handleChange}
            maxUnassignedAmount={maxUnassignedAmount}
            countries={countries}
          />
          <S.HubsWrapper>
            {filteredHubs.map((hub, index) => (
              <Hub data={hub} key={index} />
            ))}
          </S.HubsWrapper>
        </>
      )}
    </S.Container>
  );
};

export default App;
