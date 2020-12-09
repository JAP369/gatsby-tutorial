import styled from "styled-components"
import { setFlex, setBackground } from "../../layout/styles"

const Hero = styled.header`
  /* vw  */
  min-height: 100vh;
  /* img bg & overlay */
  ${props =>
    setBackground({
      img: props.img,
      color: "rgba(0,0,0,0.0)",
    })};
  /* align-items, justify-content */
  /* ${setFlex({ x: "center", y: "center" })} */
  ${setFlex()};
`

export default Hero
