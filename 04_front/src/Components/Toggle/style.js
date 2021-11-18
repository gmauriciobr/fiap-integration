import styled from "styled-components"

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  --webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  :before {
    position: absolute;
    cursor: pointer;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`
export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + span {
    background-color: #e91c5d;
  }

  :focus + span {
    box-shadow: 0 0 1px #e91c5d;
  }
`
