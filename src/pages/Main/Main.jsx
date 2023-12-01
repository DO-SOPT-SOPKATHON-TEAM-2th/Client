import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainWriteIc, NavigationRightIc } from '@assets';
import mainImg from '@assets/images/mainImg@2x.png';
import Header from '@components/Main/Header';
import useRouter from '@hooks/useRouter';
import calculateDate from '@utils/calculateDate';
import reqAPI from '@api/reqAPI';

/** Main page */
const Main = () => {
  const { handleRouter } = useRouter();

  const { Month, Day } = calculateDate();

  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await reqAPI.get('/api/diary/count');
        setCount(data.data.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  const handleOnClickWriting = () => {
    handleRouter('/emotion');
  };
  const handleOnClickView = () => {
    handleRouter('/board');
  };

  return (
    <St.MainWrapper>
      <St.RemainContainer></St.RemainContainer>
      <Header />
      <St.CountWrapper>
        내일을 기대하는 사람이
        <St.CountNum> &nbsp;{count}명 &nbsp; </St.CountNum> 있어요.
      </St.CountWrapper>
      <St.MainImageWrapper>
        <St.MainTextWrapper>
          <St.MainExText>내일의 오늘은</St.MainExText>
          <St.DateText>{Month}월</St.DateText>
          <St.DateText>{Day}일</St.DateText>
        </St.MainTextWrapper>
        <St.MainImage src={mainImg} alt="메인이미지" />
      </St.MainImageWrapper>
      <St.ButtonWrapper>
        <St.WritingBtn onClick={handleOnClickWriting}>
          <MainWriteIc />
          <St.WritingTextWrapper>
            내일은 무슨 일이 일어나나요?
            <NavigationRightIc />
          </St.WritingTextWrapper>
        </St.WritingBtn>
        <St.ViewBtn onClick={handleOnClickView}>
          <span>누군가의 내일 보러가기</span>
          <NavigationRightIc />
        </St.ViewBtn>
      </St.ButtonWrapper>
    </St.MainWrapper>
  );
};

export default Main;

const St = {
  MainWrapper: styled.section`
    width: 37.5rem;
    height: 66.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('background.png');
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.black};
  `,

  RemainContainer: styled.div`
    height: 4.4rem;
  `,
  CountWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33rem;
    height: 4.2rem;
    margin-top: 1.7rem;
    margin-bottom: 1.1rem;
    padding: 1rem;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray400};

    font-size: 1.4rem;
    border-radius: 20px;
  `,

  CountNum: styled.span`
    color: ${({ theme }) => theme.colors.primary200};
  `,

  MainImageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 33rem;
    height: 27.4rem;
    flex-shrink: 0;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
  `,

  MainTextWrapper: styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.6rem;

    margin-left: 3rem;
    padding-top: 4rem;
  `,

  MainExText: styled.span`
    ${({ theme }) => theme.fonts.Subhead};
  `,

  DateText: styled.span`
    ${({ theme }) => theme.fonts.Display};
  `,
  MainImage: styled.img`
    width: 30rem;
    height: 16.4rem;
    margin-top: 1.7rem;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    ${({ theme }) => theme.fonts.Body};
    color: ${({ theme }) => theme.colors.white};
    gap: 0.9rem;
  `,

  WritingBtn: styled.button`
    display: flex;
    flex-direction: column;
    width: 34.3rem;
    padding: 2.3rem 1.8rem;
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 0.8rem;
  `,

  WritingTextWrapper: styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 9rem;
  `,

  ViewBtn: styled.button`
    display: flex;
    width: 34.3rem;
    padding: 2.3rem 1.8rem;
    align-items: flex-end;
    gap: 13rem;
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 0.8rem;
  `,
};
