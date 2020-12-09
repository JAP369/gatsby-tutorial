import React from "react"
import Section from "../atoms/Section"
import Title from "../atoms/Title"
import featureImg from "../../images/tb_food_menu/setlunch.jpg"
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../layout/styles"
import { PrimaryBtn } from "../atoms/Buttons"
import styled from "styled-components"

const FeatureFood = () => {
  return (
    <Section style={{ background: "white" }}>
      <FeatureCenter>
        <div className="about-info">
          <Title title="SET LUNCH - NOW AVAILABLE!"></Title>
          <p style={{ color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque
            error nesciunt ab similique consequatur eum voluptate at obcaecati
            explicabo iure repudiandae porro temporibus inventore corporis iste,
            voluptatibus dignissimos perferendis?
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
        <div className="about-img">
          <img src={featureImg} alt="about us" />
        </div>
      </FeatureCenter>
    </Section>
  )
}

const FeatureCenter = styled.div`
  height: 100vh;
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({
        width: setRem(6),
        color: setColor.mainGold,
      })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.large`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  width: 100vw;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${setRem(32)};
  .about-img, .about-info {
    align-self: center;
  }
  .about-info{
    p{
      width: 80%;
      color: white;
    }
  }
  `}
`

export default FeatureFood
