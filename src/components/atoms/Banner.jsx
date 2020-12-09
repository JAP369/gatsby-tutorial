import React from "react"
import styled, { css, keyframes } from "styled-components"
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../layout/styles"

const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
  opacity: 0;
  transform: translateY(${start})
}
50%{
  opacity: 0.5;
  transform: translateY(${point})
}
100%{
  opacity: 1;
  transform: translateY(${end})
}
`
  return css`
    animation: ${animation} 3s ease-in-out;
  `
}

const Banner = ({ title, className, children, text, greeting }) => {
  return (
    <div className={className}>
      <h1>
        {greeting}
        <br />
        <span>{title} </span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1rem;
  text-align: center;
  padding: ${setRem(60)} ${setRem(60)};
  ${setLetterSpacing(3)}
  color: ${setColor.mainWhite};
  h1 {
    /* text-transform: capitalize; */
    font-size: ${setRem(70)};
    color: ${setColor.mainGold};
    /* box-shadow: 3px 12px #e9ba23; */
    span {
      color: ${setColor.mainWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
    color: ${setColor.mainWhite};
    opacity: 0.8;
    font-size: clamp(1.8rem, 2.5vw, 1rem);
    text-transform: uppercase;
  }

  ${media.tablet` width: 70vw; 
    ${setBorder({
      width: "3px",
      color: setColor.mainBlack,
    })};
    p {
      width: 75%;
    }`}

  h1 {
    ${fadeIn("100%", "-10%", "0")};
  }
  .info {
    ${fadeIn("-100%", "10%", "0")};
  }
`

export default BannerWrapper
