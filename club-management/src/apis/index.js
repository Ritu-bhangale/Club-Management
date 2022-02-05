import axios from "axios";

const url = "http://localhost:8080/clubs/61fe5ef847652c890038269a"

export const readClubs = () =>axios.get(url);
