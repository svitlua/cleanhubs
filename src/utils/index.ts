export interface IHub {
  uuid: string;
  assignable: boolean;
  displayName: string;
  cardDescription: string;
  location: string;
  logo?: {
    directLink: string;
    thumbnailDirectLink: string;
  };
  totalRecoveredQuantity: number;
  unassignedQuantityTotal: number;
  recoveredQuantityUnit: string;
  slug: string;
  stage: STAGE;
  parentHubName: string | null;
}

export enum STAGE {
  Pilot = "PILOT",
  FullyOnboarded = "FULLY_ONBOARDED",
}

export enum FilterFields {
  DisplayName = "displayName",
  Stage = "stage",
  Assignable = "assignable",
  UnassignedQuantityTotal = "unassignedQuantityTotal",
  Location = "location",
}

export enum FilterMatchType {
  Exact = "exact",
  Partial = "partial",
  Range = "range",
}

export const FilterMatchTypeMap = {
  [FilterFields.Assignable]: FilterMatchType.Exact,
  [FilterFields.DisplayName]: FilterMatchType.Partial,
  [FilterFields.Stage]: FilterMatchType.Partial,
  [FilterFields.UnassignedQuantityTotal]: FilterMatchType.Range,
  [FilterFields.Location]: FilterMatchType.Partial,
};

export interface IFiltersType {
  [FilterFields.Assignable]: boolean;
  [FilterFields.DisplayName]?: string;
  [FilterFields.Location]?: string;
  [FilterFields.Stage]?: string;
  [FilterFields.UnassignedQuantityTotal]?: string | number;
}

export const HUBS_URL = "https://marketplace-demo.cleanhub.com/api/public/hubs";

export const SHOW_ALL = "ALL";
