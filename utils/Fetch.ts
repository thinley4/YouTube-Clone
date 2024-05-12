import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";

require('dotenv').config();

export const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "0aaeba7db2msh277eb6e3201a05dp1e1cafjsnbeb87de06c04", 
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
//@ts-ignore
const fetchApi = async (url) => {
  
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    
    return data;
  } catch (error) {
    console.log("error in fetch api");
  }
};
export default fetchApi;
