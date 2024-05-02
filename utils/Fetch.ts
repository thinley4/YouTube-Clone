import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "31e29fed26mshd09f31c3fec11f6p18fa2bjsnc307e69878d7",
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
