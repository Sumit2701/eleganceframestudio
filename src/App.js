import './App.css';
import Sidebar from './components/MySidebar';
import { useState, useRef , useEffect} from 'react';
import Upload from './components/Upload';
import ImageZoomPan from './components/ImageZoomPan';
import  { toJpeg } from 'html-to-image';
import filterList from './components/FilterList.js'
function App() {
  
  const [picture,setPicture]=useState();
  const [selectedFilter, setSelectedFilter] = useState();
  const domE2 = useRef(null);
  const [imageStyle, setImageStyle] = useState({}); 
  const downloadImage = async () => {
    const dataUrl = await toJpeg(domE2.current);

    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.jpeg';
    link.href = dataUrl;
    link.click();
  };

  const getImageStyle= () => {
    console.log("img.style")
    if (selectedFilter)  {
      console.log(filterList[selectedFilter.name].filters.map(filter => `${filter.filterType}(${filter.value}%)`).join(' '))
      const filterStyles = filterList[selectedFilter.name].filters.map(filter => `${filter.filterType}(${filter.value}%)`).join(' ');
      return {

        filter: filterStyles
      };
    } else {
      console.log("else")
      return {
        height: 'auto' // Default style without filters
      };
    }
  };
  useEffect(() => {
    const img = domE2.current;
    if (img) {
      
      setImageStyle(getImageStyle());
      console.log(imageStyle)
    }
    
  }, [selectedFilter]);

  

  
  return (
    <div className="App overflow-hidden">
   <div className='glassDiv md:flex justify-between '>
   <Sidebar filterList={filterList} setSelectedFilter={setSelectedFilter}  />
   <div className='text-4xl  bg-white w-full   '> 
    <div className='flex justify-center  ml-32 items-center h-full'>
   {!picture ?( 
   <Upload imageSet={{setPicture}} />

    ) : (
              <div className='flex overflow-hidden justify-center '>
                <ImageZoomPan image={{picture,imageStyle}}/>

              </div>
              
            )}
    </div>
   </div>
  
  <div className='md:w-2/6 w-full md:ml-0 ml-24  bg-white text-black border-l-2 border-gray-950'>
  <button onClick={downloadImage}>Download!</button>
  </div>
   </div>
   {picture && <img ref={domE2} className='w-full' src={picture} alt="Generated"   style={imageStyle}/>}
   
    </div>
  );
}

export default App;
