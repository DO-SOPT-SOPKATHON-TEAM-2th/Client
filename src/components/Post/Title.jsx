import React from 'react';
import styled from 'styled-components';

/** Title Component */
const Title = () => {
    return (
        <St.TitleInput placeholder='제목을 입력해주세요.' />
    )
}

export default Title;

const St = {
    TitleInput: styled.input`
        width: 34.3rem;
        height: 5.6rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        background: ${({ theme }) => theme.colors.gray400};

        &::placeholder {
            ${({ theme }) => theme.fonts.Body};
            color: ${({ theme }) => theme.colors.gray200};
        }
    `
}