import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '@components/Post/Header';
import Nickname from '@components/Post/Nickname';
import TextArea from '@components/Post/TextArea';
import Title from '@components/Post/Title';

/** Post page */
const Post = ({ handleNext, emotion }) => {
  const [inputValues, setInputValues] = useState({
    title: '',
    nickname: '',
    textarea: '',
  });

  const isButtonDisabled = !inputValues.title || !inputValues.nickname || !inputValues.textarea;

  return (
    <St.PostWrapper>
      <Header inputValues={inputValues} emotion={emotion} isButtonDisabled={isButtonDisabled} handleNext={handleNext} />
      <St.BodyWrapper>
        <Title inputValues={inputValues} setInputValues={setInputValues} />
        <Nickname inputValues={inputValues} setInputValues={setInputValues} />
        <TextArea inputValues={inputValues} setInputValues={setInputValues} />
      </St.BodyWrapper>
    </St.PostWrapper>
  );
};

export default Post;

const St = {
  PostWrapper: styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.colors.black};
  `,

  Header: styled.div``,

  BodyWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0rem 1.6rem 18.1rem 1.6rem;
  `,
};
