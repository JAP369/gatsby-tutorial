import React, { useEffect, useState } from "react"
import { animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { motion } from "framer-motion"
// import { setColor } from "../../styles"
import * as FaIcons from "react-icons/fa"

const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#242424" : "black")};
  opacity: ${({ scrollNav }) => (scrollNav ? "0.9" : "1")};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 10;
`
const NavIcon = styled(motion.custom(GatsbyLink))`
  /* display: flex;
  position: absolute; */
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  margin-left: 2rem;
`

const NavLogo = styled(motion.custom(GatsbyLink))`
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  margin-left: 2rem;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`

const NavLink = styled(motion.custom(GatsbyLink))`
  color: white;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`
const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40vw;

  @media screen and (max-width: 600px) {
    color: red;
  }
`

const Navbar = ({ showSidebar }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToBottom({
      duration: 30000,
      behavior: "smooth",
    })
  }
  return (
    <Nav scrollNav={scrollNav}>
      <NavLogo
        to="/"
        onClick={toggleHome}
        whileHover={{
          scale: 1.3,
          color: "gold",
          opacity: 0.9,
        }}
      >
        taps & bites
      </NavLogo>
      <LinksWrapper>
        <NavLink
          to="/"
          whileHover={{
            scale: 1.5,
            color: "red",
            opacity: 0.9,
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          whileHover={{
            scale: 1.5,
            color: "blue",
            opacity: 0.9,
          }}
        >
          Blog
        </NavLink>
        <NavLink
          whileHover={{
            scale: 1.5,
            color: "yellow",
            opacity: 0.9,
          }}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          whileHover={{
            scale: 1.5,
            color: "green",
            opacity: 0.9,
          }}
          to="/examples"
        >
          Examples
        </NavLink>
        <NavLink
          onClick={toggleHome}
          whileHover={{
            scale: 1.5,
            color: "orange",
            opacity: 0.9,
          }}
          to="/images"
        >
          Images
        </NavLink>
      </LinksWrapper>
      <NavIcon
        to="#"
        whileHover={{
          scale: 1.2,
          color: "gold",
          opacity: 0.9,
        }}
      >
        <FaIcons.FaBars onClick={showSidebar} />
      </NavIcon>
    </Nav>
  )
}

export default Navbar
