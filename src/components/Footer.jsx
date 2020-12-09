import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import { animateScroll as scroll } from "react-scroll"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  /* position: sticky; */
  width: 100vw;
  bottom: 0px;
`

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`
export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const Logo = styled(motion.custom(GatsbyLink))`
  color: #fff;
  justify-self: start;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  cursor: pointer;
  /* &:hover {
    color: "white";
    transition: 0.6s ease-in;
  } */
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`
export const SocialIconLink = styled(motion.a)`
  color: #fff;
  font-size: 24px;
  /* &:hover {
    text-align: center;
    color: "white";
    border-radius: 20px;
    transition: 0.6s ease-in;
    cursor: pointer;
  } */
`

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Logo
              to="/"
              onClick={toggleHome}
              whileHover={{
                scale: 1.2,
                color: "gold",
              }}
            >
              TAPS & BITES
            </Logo>
            <SocialIcons>
              <SocialIconLink
                whileHover={{
                  scale: 1.5,
                  color: "RoyalBlue",
                }}
                href="https://www.facebook.com/Taps-and-Bites-105027754297027"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                whileHover={{
                  scale: 1.5,
                  color: "DarkMagenta",
                }}
                href="https://www.instagram.com/tapsandbites/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                whileHover={{
                  scale: 1.5,
                  color: "red",
                }}
                href="https://www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                whileHover={{
                  scale: 1.5,
                  color: "aqua",
                }}
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                whileHover={{
                  scale: 1.5,
                  color: "CornflowerBlue",
                }}
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
