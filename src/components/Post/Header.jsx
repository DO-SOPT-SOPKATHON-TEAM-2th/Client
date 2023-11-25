import React from 'react';
import styled from 'styled-components';
import { NavigationLeftIc } from '../../assets/index.js';
import SaveBtn from './SaveBtn.jsx';

/** Header Component */
const Header = () => {
  return (
    <St.HeaderWrapper>
      <St.IconWrapper>
        <NavigationLeftIc />
      </St.IconWrapper>
      <St.HeaderTitle>글쓰기</St.HeaderTitle>
      <St.ButtonWrapper>
        <SaveBtn />
      </St.ButtonWrapper>
    </St.HeaderWrapper>
  )
}

export default Header;

const St = {
  HeaderWrapper: styled.div`
        display: flex;
        padding: 0rem 1.8rem 1.6rem 2rem;
    `,

  HeaderTitle: styled.div`
        margin-left: 12rem;
        margin-top: 1.8rem;
        ${({ theme }) => theme.fonts.Subhead};
        color: ${({ theme }) => theme.colors.white};
    `,

  ButtonWrapper: styled.div`
        margin-left: auto;
        margin-top: 0.8rem;
    `,

  IconWrapper: styled.div`
        margin-top: 1.6rem;
    `,
}