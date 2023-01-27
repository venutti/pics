import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID HYw_MuADhxskdI9tVDRV41Kpxa6is2amJJnmfpiLTew",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
