import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    const autoClose = setTimeout(setSidebar, 9000)
    return function () {
      clearTimeout(autoClose)
    }
  })

  return (
    <>
      <Navbar showSidebar={showSidebar} />
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      <main> {children}</main>
      <Footer />
      <MusicPlayer />
    </>
  )
}

export default Layout
