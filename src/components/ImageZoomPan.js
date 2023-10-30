const ImageComponent = ({ image}) => {
  
  return (
<div>
    <div className=' '>
   
      <img   width={"400px"}  src={image.picture} style={image.imageStyle}  alt="Generated" />
        
    </div>
    
    </div>
  );
};

export default ImageComponent;
