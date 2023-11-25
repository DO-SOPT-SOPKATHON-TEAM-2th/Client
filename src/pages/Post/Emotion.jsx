import React, { useState } from 'react';
import styled from 'styled-components';
import EmotionHeader from '../../components/Post/EmotionHeader';
import SelectEmotion from '../../components/Post/SelectEmotion';
import Button from '../../components/common/Button/Button';
import Post from './Post';

const Emotion = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [emotion, setEmotion] = useState('');
  const [isNext, setIsNext] = useState(false);

  const handleEmotion = (num) => {
    setEmotion(num);
  };

  const handleNext = () => {
    setIsNext(false);
  };

  return (
    <>
      {!isNext && (
        <St.PageWrapper>
          <EmotionHeader />
          <SelectEmotion setIsDisabled={setIsDisabled} handleEmotion={handleEmotion} />
          <Button
            disabled={isDisabled}
            onClick={() => {
              setIsNext(true);
            }}>
            다음으로 넘어가기
          </Button>
        </St.PageWrapper>
      )}
      {isNext && <Post emotion={emotion} handleNext={handleNext} />}
    </>
  );
};

export default Emotion;

const St = {
  PageWrapper: styled.div`
    height: 100vh;
    background-image: url('/images/emotionLogoImg.png');
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.black};
  `,
};
