import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random";

export default {
  search: function() {
    return axios.get(BASEURL);
  },
  breedSearch: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBreedList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
