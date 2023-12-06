import axios from "axios";

const SearchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      authorization: "Client-ID _OSb8kenewEgrT7W-A8Z2fOwYH77gRg3GQigP9ivRDc"
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default SearchImage;
