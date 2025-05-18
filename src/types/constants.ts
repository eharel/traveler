import { User } from "./modelTypes";

export const FAKE_USER: User = {
  name: "Fakey mcFakeFace",
  email: "fakeuser@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

export const SEARCH_PARAMS = {
  lat: "lat",
  lng: "lng",
} as const;
