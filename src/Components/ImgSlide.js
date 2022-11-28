import { useState } from "react";
import ImgInfo from "./ImgInfo";
import './ImgSlide.css';
import { images } from "../Holder/ImgData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ImgSlide() {

    const [curImg, setCurImg] = useState(0);


  return (
    <div className='imgSlide'>
        <div 
            className='imgBox' 
            style={{ backgroundImage: `url(${images[curImg].img})` }}
        >
            <div 
              className="left"
              onClick={() => {
                setCurImg(curImg - 1);
              }}
              >
              <ArrowBackIosIcon/>
            </div>
            <div 
              className="right" 
              onClick={() => {
                setCurImg(curImg + 1);
              }}>
              <ArrowForwardIosIcon/>
            </div>
        </div>

        <ImgInfo/>
    </div>
  )
}

