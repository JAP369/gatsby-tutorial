import React from "react"
import Layout from "../layout"
import Header from "../components/organisms/Header"
import FeaturedBev from "../components/organisms/FeaturedBev"
import FeaturedFood from "../components/organisms/FeaturedFood"
import InfoBev from "../components/organisms/InfoBev"
import InfoFood from "../components/organisms/InfoFood"
import ImageSlider from "../components/organisms/ImageSlider"
import FeaturedEvents from "../components/organisms/FeaturedEvents"
import { SliderData } from "../components/organisms/SliderData"

const Home = () => {
  return (
    <Layout>
      <Header />
      <InfoBev />
      <FeaturedBev />
      <ImageSlider slides={SliderData} />
      <InfoFood />
      <FeaturedFood />
      <FeaturedEvents />
    </Layout>
  )
}

export default Home
