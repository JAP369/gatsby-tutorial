import React from "react"
import Hero from "../atoms/Hero"
import Banner from "../atoms/Banner"
import { PrimaryBtn } from "../atoms/Buttons"
import homeImg from "../../images/tb_food_menu/splash.jpg"

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="TAPS & BITES"
        // title='TAPS & BITES'
        text="Southeast Asian Grill - Craft Beers - Awesome Vibes"
      >
        <PrimaryBtn t="1rem" whileHover={{ scale: 1.1 }} as="a" href="/">
          Book Now
        </PrimaryBtn>
      </Banner>
    </Hero>
  )
}

export default Header
