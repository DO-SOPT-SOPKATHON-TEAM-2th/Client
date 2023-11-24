const colors = {
  mainPink: '#ff0558',
};

function FONT({ weight, size, lineHeight = 1 }) {
  return `
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight};
  letter-spacing: normal;
  `;
}

const fonts = {
  largeTitle: FONT({ weight: 700, size: 3.6 }),

};

const theme = {
  colors,
  fonts
}

export default theme;
