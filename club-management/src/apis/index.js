import axios from "axios";

const clubsurl = "http://localhost:8080/clubs/"
export const readClubs = () =>axios.get(clubsurl);

const eventurl = "http://localhost:8080/event/"
export const readEvents = () =>axios.get(eventurl);