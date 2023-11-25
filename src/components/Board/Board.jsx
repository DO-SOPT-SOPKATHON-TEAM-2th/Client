/** Board page */
import { NavigationLeftIc } from '@assets';
import styled from 'styled-components';
import { SectionContainer } from '@styles/common/commonStyle';
import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';
import BoardArticle from './BoardArticle';
import reqAPI from '@api/reqAPI';
import { useEffect, useState } from 'react';

const Board = () => {
  const [count, setCount] = useState(0);
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await reqAPI.get('/api/diary/count');
        const diaries = await reqAPI.get('/api/diaries');
        setDiaries(diaries.data.data.diaryInfos);
        setCount(data.data.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  return (
    <SectionContainer>
      <HeaderContainer>
        <Link>
          <NavigationLeftIc />
        </Link>
        <h1>게시판</h1>
      </HeaderContainer>
      <WaitingText>
        <strong>R=VD &nbsp;</strong>
        <span>내일을 기다리는 사람이 &nbsp;</span>
        <strong>{count}명 &nbsp;</strong>
        <span>있어요.</span>
      </WaitingText>
      <ArticleList>
        {diaries.map(({ author, likeCount, title, content, diaryId }) => (
          <BoardArticle
            key={`${author}-${title}`}
            author={author}
            likeCount={likeCount}
            title={title}
            content={content}
            diaryId={diaryId}
          />
        ))}
      </ArticleList>
      <Button>내일 일기 쓰기</Button>
    </SectionContainer>
  );
};

export default Board;

const HeaderContainer = styled.header`
  ${({ theme }) => theme.fonts.Subhead};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.2rem;
  margin-bottom: 1.3rem;
  color: ${({ theme }) => theme.colors.white};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    position: absolute;
    left: 0;
  }
`;

const WaitingText = styled.p`
  ${({ theme }) => theme.fonts.Caption};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.2rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};

  strong {
    color: ${({ theme }) => theme.colors.primary200};
  }

  strong:first-child {
    ${({ theme }) => theme.fonts.Button};
  }
`;

const ArticleList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 10.8rem;
  overflow: scroll;

  li {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;
