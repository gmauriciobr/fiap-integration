import React from "react"
import { Container, Checkbox, Slider } from "./style"

export default function Toggle({ handleCheck, ...props }) {
  return (
    <Container {...props}>
      <Checkbox type="checkbox" onClick={() => handleCheck()} />
      <Slider></Slider>
    </Container>
  )
}
