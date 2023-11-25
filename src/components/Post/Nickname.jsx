import React from 'react';
import styled from 'styled-components';

/** Nickname Component */
const Nickname = () => {
    return (
        <St.NicknameInput type='text' placeholder='닉네임을 입력해주세요.' />
    )
}

export default Nickname;

const St = {
    NicknameInput: styled.input`
        display: block;
        width: 34.3rem;
        height: 5.6rem;
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