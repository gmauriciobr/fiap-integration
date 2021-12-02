import React from "react"
import { Container, Checkbox, Slider } from "./style"

export default function Toggle({ checked, handleCheck, ...props }) {
  return (
    <Container {...props}>
      <Checkbox
        checked={checked}
        type="checkbox"
        onClick={() => handleCheck()}
      />
      <Slider></Slider>
    </Container>
  )
}
