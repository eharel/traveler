export interface City {
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
}

export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface Country {
  id: number;
  name: string;
  emoji: string;
}

export function createCountry(
  id: number,
  name: string,
  emoji: string
): Country {
  return { id, name, emoji };
}
