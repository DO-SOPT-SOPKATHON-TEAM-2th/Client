const colors = {
  black: '#111217',
  white: '#FFF',
  gray400: '#252632',
  gray300: '#31353F',
  gray200: '#777A8D',
  gray100: '#BDBEC9',
  gray50: '#EBECF4',
  white: '#FFF',

  primary200: '#BB86FC',
  primary100: '#BB86FC4D',
  secondary: '#03DAC5',
};

function FONT({ weight, size, lineHeight = 1, spacing = 'normal' }) {
  return `
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight};
  letter-spacing: ${spacing};
  `;
}

const fonts = {
  Display: FONT({ weight: 700, size: 3.6, spacing: '-0.6px' }),
  Head: FONT({ weight: 700, size: 2.4, lineHeight: 1.4 }),
  Subhead: FONT({ weight: 700, size: 1.8, lineHeight: 1.2, spacing: '-0.6px' }),
  Button: FONT({ weight: 700, size: 1.6, lineHeight: 1.3 }),
  Body: FONT({ weight: 400, size: 1.6, lineHeight: 1.5, spacing: '-0.6px' }),
  Body2: FONT({ weight: 400, size: 1.5, lineHeight: 1.5, spacing: '-0.6px' }),
  Caption: FONT({ weight: 400, size: 1.4, lineHeight: 1.4 }),
};

const theme = {
  colors,
  fonts,
};

export default theme;
