export type City = {
  id: string;
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
  id: string;
  name: string;
  emoji: string;
}

// create a factory function to create a new country object
export function createCountry(
  id: string,
  name: string,
  emoji: string
): Country {
  return {
    id,
    name,
    emoji,
  };
}
