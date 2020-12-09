import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: 'Menu',
    path: '/menu',
    icon: <BiIcons.BiFoodMenu />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Bites',
        path: '/menu/bites',
        icon: <FaIcons.FaUtensils />,
      },
      {
        title: 'Set Lunch',
        path: '/menu/setlunch',
        icon: <FaIcons.FaUtensils />,
      },
      {
        title: 'Taps',
        path: '/menu/taps',
        icon: <IoIcons.IoMdBeer />,
      },
    ],
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Our Story',
        path: '/about/story',
        icon: <FaIcons.FaUtensils />,
      },
      {
        title: 'Team',
        path: '/about/team',
        icon: <FaIcons.FaUtensils />,
      },
    ],
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Message 1',
    //     path: '/messages/message1',
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: 'Message 2',
    //     path: '/messages/message2',
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: 'Delivery',
    path: '/delivery',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
