import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink
        to={item.path}
        // onMouseOver={item.subNav && showSubnav}
        // onMouseOut={!showSubnav}
      >
        <div>
          {item.icon}
          <SidebarLabel onMouseEnter={item.subNav && showSubnav}>
            {item.title}
          </SidebarLabel>
        </div>
        <motion.div whileHover={{ scale: 3 }} onMouseEnter={setSubnav}>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </motion.div>
      </SidebarLink>

      <motion.div whileHover={{ scale: 1.1 }}>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            )
          })}
      </motion.div>
    </>
  )
}

export default SubMenu

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #494747;
    border-left: 3px solid #b91313;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
`

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #b91313;
    cursor: pointer;
  }
`
