import React, { useEffect } from "react"
import styled from "styled-components"
import { setFlex, setColor, setLetterSpacing } from "../../layout/styles"
import img from "../../images/tb_food_menu/food.jpg"
import vid from "../../videos/grill.mp4"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const InfoFood = () => {
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
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1.5 },
            hidden: { opacity: 0, y: 600 },
          }}
        >
          Mouth Watering Bites...
          <br /> Souteast Asian Style!
        </InfoH1>
        <InfoP
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 3.5 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              x: 300,
              scale: 0,
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, veniam.
        </InfoP>
        <br />{" "}
        <InfoP
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 4 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              x: -300,
              scale: 0,
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusantium recusandae iure eaque, soluta id praesentium consequuntur
          fugiat odio explicabo.
        </InfoP>
      </InfoContent>
    </InfoCtr>
  )
}

export default InfoFood

const InfoCtr = styled.div`
  min-height: 80vh;
  background-color: black;
  background: url(${img}) center/cover fixed no-repeat;
  ${setFlex()};

  /* @media screen and (max-width: 768px) {
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
  padding-bottom: 100px;
  /* margin-right: 100px; */

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
