import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e0144c46c9d4780b5ff9ce9a2ec7e4e",
  },
});
