import React from 'react';
import styled from 'styled-components';
import { NavigationLeftIc } from '../../assets/index.js';
import SaveBtn from './SaveBtn.jsx';
import { Link } from 'react-router-dom';

/** Header Component */
const Header = ({ isButtonDisabled }) => {
  return (
    <St.HeaderWrapper>
      <St.IconWrapper to="/emotion">
        <NavigationLeftIc />
      </St.IconWrapper>
      <St.HeaderTitle>글쓰기</St.HeaderTitle>
      <St.ButtonWrapper to="/board">
        <SaveBtn isButtonDisabled={isButtonDisabled} />
      </St.ButtonWrapper>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.div`
    align-items: center;
    display: flex;
    height: 6.9rem;
    padding: 0rem 2rem 1.6rem 1.8rem;
  `,

  HeaderTitle: styled.div`
    align-items: center;
    margin: 1.8rem 9.3rem 0rem 11rem;
    ${({ theme }) => theme.fonts.Subhead};
    color: ${({ theme }) => theme.colors.white};
  `,

  ButtonWrapper: styled(Link)`
    margin-left: auto;
    margin-top: 0.8rem;
  `,

  IconWrapper: styled(Link)`
    margin-top: 2.3rem;
  `,
};
