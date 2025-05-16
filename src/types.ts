export type City = {
  id: number;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
};

export interface Country {
  id: number;
  name: string;
  emoji: string;
}

// create a factory function to create a new country object
export function createCountry(
  id: number,
  name: string,
  emoji: string
): Country {
  return {
    id,
    name,
    emoji,
  };
}

export const SEARCH_PARAMS = {
  lat: "lat",
  lng: "lng",
  id: "id",
} as const;

export type SearchParamsKeys = keyof typeof SEARCH_PARAMS;
