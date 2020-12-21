import axios from "axios";

export const api = axios.create({
  baseURL: "https://gateway.marvel.com/",
});

export const apikey = "?apikey=09abfdb49a6ed2861fa829d3d86888ae";
