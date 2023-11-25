/** Main page */
import React from 'react';
import styled from 'styled-components';
import mainTitle from '../../assets/images/mainTitle.png';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <St.TitleImg src={mainTitle} alt="메인타이틀이미지" />
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.9rem;
    background-color: transparent;
  `,

  TitleImg: styled.img`
    width: auto;
    height: 2.7rem;
  `,
};
