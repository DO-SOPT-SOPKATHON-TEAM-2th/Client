import React from 'react';
import styled from 'styled-components';

/** Title Component */
const Title = ({ inputValues, setInputValues }) => {

    const handleInputChange = (fieldName, value) => {
        setInputValues({
            ...inputValues,
            [fieldName]: value,
        });
    };

    return (
        <St.TitleInput
            placeholder='제목을 입력해주세요.'
            onChange={(e) => { handleInputChange('title', e.target.value) }}
        />
    );
};

export default Title;

const St = {
    TitleInput: styled.input`
    width: 34.3rem;
    height: 5.6rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.Body};
    background: ${({ theme }) => theme.colors.gray400};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray200};
    }
  `,
};
