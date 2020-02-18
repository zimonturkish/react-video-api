import axios from "axios";
const KEY = "AIzaSyAjAJVro_cBmek72z-Kw377ltMtrvJFhqs"; // uppercase because this specifically says this is a costant value

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
