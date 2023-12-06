const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="mb-[10px]"
        loading="lazy"
      />
    </div>
  );
};

export default ImageShow;
