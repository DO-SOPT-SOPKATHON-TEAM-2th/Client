import React, { useState } from 'react';
import styled from 'styled-components';
import EmotionHeader from '../../components/Post/EmotionHeader';
import SelectEmotion from '../../components/Post/SelectEmotion';
import Button from '../../components/common/Button/Button';


const Emotion = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <St.PageWrapper>
            <EmotionHeader />
            <SelectEmotion setIsDisabled={setIsDisabled} />
            <Button disabled={isDisabled}>다음으로 넘어가기</Button>
        </St.PageWrapper>
    )
}

export default Emotion

const St = {
    PageWrapper: styled.div`
        height: 100vh;
        background-image: url('/images/emotionLogoImg.png');
        background-size: cover;
        background-color: ${({ theme }) => theme.colors.black};
    `,
}