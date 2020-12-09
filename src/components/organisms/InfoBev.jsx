import React, { useEffect } from "react"
import styled from "styled-components"
import { setFlex, setColor, setLetterSpacing } from "../../layout/styles"
import img from "../../images/tap1.jpg"
import vid from "../../videos/beer.mp4"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const InfoBev = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])
  return (
    <InfoCtr>
      <VideoBG autoPlay loop muted src={vid} type="video/mp4"></VideoBG>

      <InfoContent>
        <InfoH1
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, y: 200, scale: 1.8 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          Feeling Thirsty Yet?
        </InfoH1>
        <InfoP
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 3.5 }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              y: -300,
              scale: 0,
            },
          }}
        >
          Treat yourself to an upscale beer bar that's anything but ordinary. We
          have over 10 Bottle Beers and over 20 different Craft Beers on Tap
        </InfoP>
      </InfoContent>
    </InfoCtr>
  )
}

export default InfoBev

const InfoCtr = styled.div`
  min-height: 80vh;
  background-color: black;
  background: url(${img}) center/cover fixed no-repeat;
  ${setFlex()};
  /* 
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 30vh;
  }

  @media screen and (max-width: 480px) {
    width: 480px;
    height: 300px;
  } */
`

const VideoBG = styled.video`
  width: 100%;
  height: 120%;
  /* -o-object-fit: cover; */
  /* object-fit: cover; */
  background: #232a34;
`

const InfoContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoH1 = styled(motion.h1)`
  color: ${setColor.mainWhite};
  font-size: 60px;
  text-align: center;
  padding-bottom: 300px;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding: 60px;
    margin-right: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: 60px;
    margin-right: 0;
  }
`

const InfoP = styled(motion.p)`
  margin-top: 10px;
  /* padding-top: 50px; */
  color: ${setColor.mainWhite};
  opacity: 0.7;
  font-size: 24px;
  text-align: center;
  max-width: 900px;
  margin-right: 100px;
  ${setLetterSpacing(6)};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-right: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    margin-right: 0;
  }
`

// const Image = styled(img)`
//   border-radius: 10px;
//   height: 100%;
// `;

const Img = styled.div`
  /* max-width: 555px; */
  display: flex;
  justify-content: center;
  background: url(${img}) center/cover no-repeat;
  width: 330px;
  height: 330px;
  border-radius: 10px;
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: column;
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`
