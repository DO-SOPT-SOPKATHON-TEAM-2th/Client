import React from 'react';
import styled from 'styled-components';
import { NavigationLeftIc } from '../../assets/index';

const EmotionHeader = () => {
    return (
        <St.HeaderWrapper>
            <St.IconWrapper>
                <NavigationLeftIc />
            </St.IconWrapper>
            <St.SelectText>
                내일의 감정은
            </St.SelectText>
            <St.SelectText>
                내가 선택할 수 있어요!
            </St.SelectText>
            <St.SubText>
                내일의 감정은 내가 선택할 수 있어요!
            </St.SubText>
        </St.HeaderWrapper>
    )
}

export default EmotionHeader

const St = {
    HeaderWrapper: styled.div` 
        padding-top: 1.6rem;
        padding-left: 1.8rem;
    `,

    IconWrapper: styled.div`
        margin-bottom: 2.1rem;
    `,

    SelectText: styled.div`
        color: ${({ theme }) => theme.colors.white};
        ${({ theme }) => theme.fonts.Head};
    `,

    SubText: styled.div`
        margin-top: 1.2rem;
        color: ${({ theme }) => theme.colors.gray100};
        ${({ theme }) => theme.fonts.Caption};
    `,
}