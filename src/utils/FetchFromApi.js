import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": '820612fa53mshd366dad410c6996p1a8384jsn0378c8c2a0ff',
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

const FetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default FetchFromApi;