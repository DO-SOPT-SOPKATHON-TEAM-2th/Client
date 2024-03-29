/** Main page */
import React from 'react';
import styled from 'styled-components';
import { NavigationLeftIc } from '@assets';
import mainTitle from '@assets/images/mainTitle.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <Link to="/splash">
        <NavigationLeftIc />
      </Link>
      <St.TitleImg src={mainTitle} alt="메인타이틀이미지" />
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.section`
    width: 37.5rem;
    display: flex;
    align-items: center;
    gap: 7.78rem;
    height: 4.9rem;
    background-color: transparent;
    padding: 0 1.8rem;
  `,

  TitleImg: styled.img`
    width: auto;
    height: 2.7rem;
  `,
};
