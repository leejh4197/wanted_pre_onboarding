import React, { useState } from "react";
import * as STC from "./Toggle.style.js";

const Toggle = () => {
  const [select, setSelect] = useState("basic");
  const [locate, setLocate] = useState("5px");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSelect(value);

    if (value === "basic") {
      setLocate("5px");
    } else {
      setLocate("50%");
    }
  };
  return (
    <STC.ToggleContainer>
      <STC.ToggleBtnWrap>
        <STC.ToggleBtn>
          <STC.ToggleRadio
            id="radio01"
            type="radio"
            name="radio"
            value="basic"
            checked={select === "basic"}
            onChange={(event) => handleSelectChange(event)}
          />
          <STC.ToggleLabel for="radio01">기본</STC.ToggleLabel>
        </STC.ToggleBtn>
        <STC.ToggleBtn>
          <STC.ToggleRadio
            id="radio02"
            type="radio"
            name="radio"
            value="detail"
            checked={select === "detail"}
            onChange={(event) => handleSelectChange(event)}
          />
          <STC.ToggleLabel for="radio02">상세</STC.ToggleLabel>
        </STC.ToggleBtn>
      </STC.ToggleBtnWrap>
      <STC.ToggleSlider locate={locate} />
    </STC.ToggleContainer>
  );
};

export default Toggle;