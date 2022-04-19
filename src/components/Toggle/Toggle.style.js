import styled, { css } from "styled-components";

export const ToggleContainer = styled.div`
  position: relative;
  width: 50%;
  height: 60px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const ToggleBtnWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToggleBtn = styled.div`
  width: 50%;
  height: 50px;
  line-height: 50px;
  color: #bbb;
  font-weight: bold;
  font-size: 22px;
  border-radius: 50px;
  z-index: 1;
`;
export const ToggleRadio = styled.input`
  display: none;
  &:checked + label {
    color: #000;
  }
`;
export const ToggleLabel = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  *background: #ff0000;
`;

export const ToggleSlider = styled.div`
  position: absolute;
  top: 5px;
  ${({ locate }) => css`
    left: ${locate};
  `}
  width: calc(50% - 5px);
  height: 50px;
  line-height: 50px;
  color: #000;
  font-weight: bold;
  font-size: 22px;
  border-radius: 50px;
  background: #fff;
  opacity: 0.8;
  transition: 0.4s ease-out;
  z-index: 0;
`;