import React from 'react';
import styled from 'styled-components';

const SelectEmotion = ({ setIsDisabled, handleEmotion }) => {
  const handleButton = () => {
    setIsDisabled(false);
  };

  return (
    <St.ImgWrapper>
      <img
        src="/images/emoji1Img.png"
        onClick={() => {
          handleButton();
          handleEmotion('calm');
        }}
      />
      <img
        src="/images/emoji2Img.png"
        onClick={() => {
          handleButton();
          handleEmotion('enjoy');
        }}
      />
      <img
        src="/images/emoji3Img.png"
        onClick={() => {
          handleButton();
          handleEmotion('moving');
        }}
      />
      <img
        src="/images/emoji4Img.png"
        onClick={() => {
          handleButton();
          handleEmotion('healing');
        }}
      />
      <img
        src="/images/emoji5Img.png"
        onClick={() => {
          handleButton();
          handleEmotion('great');
        }}
      />
      <img
        src="/images/emoji6Img.png"
        onClick={() => {
          handleButton();
          handleEmotion('relief');
        }}
      />
    </St.ImgWrapper>
  );
};

export default SelectEmotion;

const St = {
  ImgWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3.5rem 1.8rem 4.4rem 1.7rem;
    justify-content: space;

    & > img {
      width: 16.6rem;
      height: 12.6rem;
      margin-bottom: 0.8rem;
      margin-left: auto;

      &:nth-child(2n) {
        margin-left: 0.8rem;
      }
    }
  `,
};
