import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import SearchImage from "./api";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImage(term);
    setImages(result);
  };

  return (
    <div className="m-[15px]">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
