import React from 'react';
import styled from 'styled-components';

/** TextArea Component */
const TextArea = () => {
  return (
    <St.TextAreaInput type='text' placeholder='내용을 입력해주세요.' />
  )
}

export default TextArea;

const St = {
  TextAreaInput: styled.textarea`
        width: 34.3rem;
        height: 24.5rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        background: ${({ theme }) => theme.colors.gray400};
        ${({ theme }) => theme.fonts.Body};
        color: ${({ theme }) => theme.colors.white};
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.gray200};
        }
    `,
}