import { css } from 'styled-components';

export const setColor = {
  primaryColor: '#baa963',
  mainGold: ' #fae58a',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#313131',
  lightGrey: '#f7f7f7',
  mainRed: '#cd162c',
  mainGreen: '#5cdb44',
  // color palette
  cinder: '#040406',
  saharaSand: '#f3e38b',
  laser: '#C9B76D',
  teak: '#b0a265',
  barleyCorn: '##9E8F58',
  sycamore: '#897A3F',
  verdigris: '#69613c',
  hemlock: '#5b553d',
  mondo: '#484330',
  birch: '#33301f',
  maroonOak: '#530d15',
};

export const setFont = {
  main: "font-family: 'Fjalla One', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

export const setFlex = ({
  x = 'center',
  y = 'center',
} = {}) => {
  return `display: flex; align-items:${y}; justify-content:${x}`;
};

export const setBackground = ({
  img = 'https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `background: linear-gradient(${color},${color}),
url(${img}) center/cover fixed no-repeat;`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};

export const setShadow = {
  light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);',
  medium: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
  dark:
    'box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);',
  gold: 'box-shadow: 10px 10px 5px 0px #baa963;',
};

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black',
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

// watch videos #31 & 32
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Itertate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {}
);

export const setTransition = ({
  property = 'all',
  time = '0.9s',
  timing = 'ease-in-out',
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};
