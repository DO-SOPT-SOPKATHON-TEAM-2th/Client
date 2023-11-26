import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SaveBtn = ({ isButtonDisabled }) => {
  return (
    <St.SaveButton
      type="button"
      to="/board"
      className={isButtonDisabled ? 'unActiveBtn' : 'activeBtn'}
      disabled={isButtonDisabled}>
      완료
    </St.SaveButton>
  );
};

export default SaveBtn;

const St = {
  SaveButton: styled(Link)`
    padding: 1rem;
    margin-top: 0.8rem;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.Button};

    &.unActiveBtn {
      color: ${({ theme }) => theme.colors.gray200};
      cursor: default;
    }

    &.activeBtn {
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  `,
};
