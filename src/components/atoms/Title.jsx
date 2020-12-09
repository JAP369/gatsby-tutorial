import React from "react"
import styled from "styled-components"
// import { motion } from 'framer-motion';
import { setLetterSpacing, setRem, setFont } from "../../layout/styles"

const Title = ({ className, title, center }) => {
  return (
    <h3 style={{ color: "#baa963" }} className={className}>
      {title}
    </h3>
  )
}

export default styled(Title)`
  font-size: ${setRem(50)};
  text-transform: capitalize;
  ${setLetterSpacing(0)};
  ${setFont.main};
  text-align: ${props => (props.center ? "center" : "left")};
`
