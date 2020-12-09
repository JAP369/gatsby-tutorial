import React from "react"
import { SidebarData } from "./SidebarData"
import SubMenu from "./SubMenu"
import styled from "styled-components"
import { motion } from "framer-motion"
import * as AiIcons from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const NavIcon = styled(motion.Link)`
  display: flex;
  position: absolute;
  /* justify-content: flex-start; */
  /* align-items: center; */
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  margin-left: 2rem;

  /* p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  } */
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-180px")};
  transition: 350ms ease-in-out;
  z-index: 99;

  @media screen and (max-width: 768px) {
    right: ${({ sidebar }) => (sidebar ? "0" : "-180px")};
  }

  @media screen and (max-width: 400px) {
    right: ${({ sidebar }) => (sidebar ? "0" : "-180px")};
  }
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "gold" }}>
        <SidebarNav sidebar={sidebar} onClick={showSidebar}>
          <SidebarWrap>
            <NavIcon
              className="icon"
              onClick={showSidebar}
              to="#"
              whileHover={{
                scale: 1.5,
                color: "gold",
                opacity: 0.9,
              }}
            >
              <AiIcons.AiOutlineClose />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
