import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = (props) => {
  const { to, children, disabled, onClick } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(to);
    onClick();
  };

  return (
    <ButtonContainer disabled={disabled} onClick={handleNavigate}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  ${({ theme }) => theme.fonts.Button};

  position: fixed;
  bottom: 3.4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34.2rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ disabled, theme }) => (disabled ? `${theme.colors.gray200}` : `${theme.colors.primary200}`)};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'cursor')};
  z-index: 2;
`;
