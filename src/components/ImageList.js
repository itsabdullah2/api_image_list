import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="columns-6 gap-[20px]">{renderedImages}</div>;
};

export default ImageList;
