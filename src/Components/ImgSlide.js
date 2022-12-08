import { useState, useEffect } from "react";
import ImgInfo from "./ImgInfo";
import Review from "./Review";
import AddWatch from "./AddWatch";
import Watchlist from './Watchlist';
import './ImgSlide.css';
import { images } from "../Holder/ImgData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Fade from "@mui/material/Fade";
import { Modal } from "@mui/material";
import Iframe from 'react-iframe';
import { ListItem, List } from "@mui/material";



export default function ImgSlide() {

    const [curImg, setCurImg] = useState(0);
    const [items, setItems] = useState([]);
    const [selectedItem, selectItem] = useState({});
    const [showModal, setModalOpen] = useState(false);
    const [addWatch, setAddWatch] = useState([]);

    // [] at the ends means it will only run once when page loads
    useEffect(() => {
      // retrieve data from json
      fetch("data/items.json")
          // turn data into json
          .then((result) => result.json())
          .then((data) => {
              //store data
              setItems(data);
              // console.log(data);
          });
  }, []);


  return (
    <div className="imgSlide-wrapper">
    <div className='imgSlide'>
      <Modal open={showModal} onClose={() => { setModalOpen(false) }}>
        {/* Modal animation stuff */}
        <Fade in={showModal} timeout={500}>
          <div id="infoBox" >
            {/* displays items from json */}
            <h3>{selectedItem.title}</h3>
            <h4>{selectedItem.director}</h4>
            <p>{selectedItem.desc}</p>
            <Iframe
            // displays trailer from json
              url={selectedItem.trailer}
              width="400px"
              height="350px"
              display="block"
              position="relative"
              overflow= "hidden" /> 
            <Review /> 
          </div>
        </Fade>
      </Modal>
      
      <div className='imgBox-wrapper'>
        <div className='imgBox' 
            /* setting the background image of the div to the current image. */
            style={{ backgroundImage: `url(${images[curImg].img})`, objectFit: 'contain' }}
        >
            <div 
              className="left"
              /* when the left arrow is clicked, it sets the current image to
              the previous image. */
              onClick={() => {
                curImg > 0 && setCurImg(curImg - 1);
              }}
              >
              <ArrowBackIosIcon/>
            </div>
            <div 
              className="right" 
              /* when the right arrow is clicked, it sets the current image
              to the next image. */
              onClick={() => {
                curImg < images.length - 1 && setCurImg(curImg + 1);
              }}>
              <ArrowForwardIosIcon/>
            </div>
        </div>
      </div>
        
        <div className="btns">
              {/* Passing the current image index and the showInfo function to the ImgInfo component. */}
        <ImgInfo movieIdx={curImg} showInfo={showInfo} />
        <AddWatch movieIdx={curImg} addTitle={addTitle}/>
        </div>
        
    </div>
    <div className="watchlist">
          <Watchlist items={AddWatch}/>
          <h3 className="watchTxt">Watchlist:</h3>
          {/* <List>{itemsList}</List> */}
        </div>
    </div>
  )

  function showInfo(itemId) {
    // select item to be shown -> put its information into a variable
    selectItem(items[itemId]);
    // console.log(items[itemId])
    // makes the modal visible
    setModalOpen(true);
  }

  function addTitle(itemId) {
    setAddWatch([...addWatch, items[itemId]]);
    console.log(addWatch);
  }  
}

