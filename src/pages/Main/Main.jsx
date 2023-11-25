import React from 'react';
import styled from 'styled-components';
import mainImg from '../../assets/images/mainImg@2x.png';
import Header from '../../components/Main/Header';
import calculateDate from '../../utils/CalculateDate';
/** Main page */
const Main = () => {
  const { Month, Day } = calculateDate();
  console.log(Month, Day);
  const cnt = 12;

  return (
    <St.MainWrapper>
      <Header />
      <St.CountWrapper>
        내일을 기대하는 사람이
        <St.CountNum> {cnt}명 </St.CountNum> 있어요.
      </St.CountWrapper>
      <St.MainImageWrapper>
        <St.MainTextWrapper>
          <St.MainExText>내일의 오늘은</St.MainExText>
          <St.DateText>{Month}월</St.DateText>
          <St.DateText>{Day}일</St.DateText>
        </St.MainTextWrapper>
        <St.MainImage src={mainImg} alt="메인이미지" />
      </St.MainImageWrapper>
      <div>
        <button>
          {/* 아이콘 */}
          <div>
            <span>내일은 무슨 일이 일어나나요?</span>
            {/* 아이콘 */}
          </div>
        </button>
        <button>
          <span>누군가의 내일 보러가기</span>
          {/* icon */}
        </button>
      </div>
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
};
