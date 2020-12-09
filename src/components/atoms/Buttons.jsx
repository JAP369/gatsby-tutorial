import styled from "styled-components"
import { motion } from "framer-motion"
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from "../../layout/styles"

export const PrimaryBtn = styled(motion.button)`
  border-radius: 3px;
  display: inline-block;
  background: ${setColor.laser};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding:${setRem(17)} ${setRem(36)}};
  ${setBorder({ color: setColor.mainBlack })};
  ${setLetterSpacing(3)};
  ${setTransition()};
  &:hover {
    background: ${setColor.mainRed};
    color: ${setColor.mainWhite};
  }
  ${props =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0} `};
  text-decoration: none;
  cursor: pointer;
`

export const SmallBtn = styled(PrimaryBtn)`
  padding:${setRem(9)} ${setRem(12)}};
  text-align: center;
  width: 50%;
`
