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

export const SEARCH_PARAMS = {
  lat: "lat",
  lng: "lng",
} as const;

export function createCountry(
  id: number,
  name: string,
  emoji: string
): Country {
  return { id, name, emoji };
}
