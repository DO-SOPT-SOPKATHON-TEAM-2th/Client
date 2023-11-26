/** Board page */
import { BoardLikeOffIc, BoardLikeOnIc } from '@assets';
import { useState } from 'react';
import styled from 'styled-components';
import reqAPI from '@api/reqAPI';

const BoardArticle = ({ author, likeCount, title, content, diaryId }) => {
  const [isLike, setIsLike] = useState(false);
  const [realTimeLikeCount, setRealTimeLikeCount] = useState(likeCount);

  const handleClick = async () => {
    setIsLike((prev) => !prev);
    setRealTimeLikeCount((prev) => prev + 1);

    await reqAPI.put(`/api/diary/like/${diaryId}`);
  };

  return (
    <li>
      <ArticleContainer>
        <h2>{title}</h2>
        <ArticleText>{content}</ArticleText>
        <div>
          <p>{author}</p>
          <LikeBox>
            <span>{realTimeLikeCount}</span>
            <button
              onClick={handleClick}
              onMouseOver={() => {
                setIsLike(true);
              }}
              onMouseOut={() => {
                setIsLike(false);
              }}>
              {!isLike && <BoardLikeOffIc />}
              {isLike && <BoardLikeOnIc />}
            </button>
          </LikeBox>
        </div>
      </ArticleContainer>
    </li>
  );
};

export default BoardArticle;

const ArticleContainer = styled.article`
  h2 {
    ${({ theme }) => theme.fonts.Button};

    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    ${({ theme }) => theme.fonts.Caption};

    color: ${({ theme }) => theme.colors.gray100};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ArticleText = styled.p`
  margin-bottom: 0.6rem;
`;

const LikeBox = styled.div`
  ${({ theme }) => theme.fonts.Caption};

  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  button {
    width: 2.4rem;
    height: 2.4rem;
  }

  button:hover {
    fill: 'green';
  }
`;
