import axios from "axios";

const url = "http://localhost:8080/clubs/"

export const readClubs = () =>axios.get(url);
