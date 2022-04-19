import React, { useState, useRef, useEffect } from "react";
import "./slider.css";
import "./thumb.css";

const Slider = () => {
  const [percentage, setPercentage] = useState(0);
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  const onChange = (e) => {
    setPercentage(e.target.value);
  };

  const onClick1 =()=>{
    setPercentage(1)
  }
  const onClick2 =()=>{
    setPercentage(25)
  }
  const onClick3 =()=>{
    setPercentage(50)
  }
  const onClick4 =()=>{
    setPercentage(75)
  }
  const onClick5 =()=>{
    setPercentage(100)
  }
  
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <>
    <div className='wrapper'>
    <div className="percentage">
        <h2>{percentage}%</h2>
      </div>
    <div className="slider-container">
      <div
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="1"
        className="range"
        onChange={onChange}
      />
    </div>
      <div className="percent-wrap">
        <div className='percent' onClick={onClick1}>1%</div>
        <div className='percent' onClick={onClick2}>25%</div>
        <div className='percent' onClick={onClick3}>50%</div>
        <div className='percent' onClick={onClick4}>75%</div>
        <div className='percent' onClick={onClick5}>100%</div>
      </div>
    </div>
    
    </>
  );
};

export default Slider;
