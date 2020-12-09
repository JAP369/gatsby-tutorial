import React, { useState, useEffect } from "react"
import { SliderData } from "./SliderData"
import styled from "styled-components"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { motion } from "framer-motion"
// import bg from '../../assets/images/bg/bg2.jpg';
import { setFlex } from "../../layout/styles"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    setTimeout(nextSlide, 3000)

    return function () {
      clearTimeout(nextSlide)
    }
  })

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <SliderContainer>
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Img
                src={slide.image}
                alt="image"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 2 }}
              />
            )}
          </div>
        )
      })}
    </SliderContainer>
  )
}

export default ImageSlider

const SliderContainer = styled.section`
  /* position: relative; */
  height: 100vh;
  display: flex;
  background: rgb(24, 23, 23);
  background: linear-gradient(90deg, #252525 0%, #000000 35%, #3a3a3a 100%);
  /* background-size: 100%;
  background-image: url(${props => props.img}); */
  ${setFlex()};

  /* @media screen and (max-width: 768px) {
    width: 100vw;
    height: 50vh;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 50vh;
  } */
`

const ArrowLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #fff;
  z-index: 3;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #dbaa08;
    transform: scale(1.1);
    transition: 1s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    opacity: 0.3;
  }
`

const ArrowRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #fff;
  z-index: 3;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #dbaa08;
    transform: scale(1.1);
    transition: 1s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    opacity: 0.3;
  }
`

const Img = styled(motion.img)`
  width: 1000px;
  height: 600px;
  border-radius: 10px;
  z-index: -5;

  /* border: solid 3px #dbaa08; */

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
    height: 200px;
  }
`
