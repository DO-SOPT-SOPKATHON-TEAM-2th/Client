/** Board page */
import { BoardLikeOffIc, BoardLikeOnIc } from '@assets';
import { useState } from 'react';
import styled from 'styled-components';

const BoardArticle = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <li>
      <ArticleContainer>
        <h2>줄넘기를 한다는 것</h2>
        <ArticleText>
          내일은 나는 이걸 할 것이다. 줄넘기를 할것이다. 그리고 뛸 것이다. 내일은 나는 이걸 할것이다. 줄넘기를 할것이다.
        </ArticleText>
        <div>
          <p>bye091790</p>
          <button
            onClick={() => {
              setIsLike((prev) => !prev);
            }}>
            {!isLike && <BoardLikeOffIc />}
            {isLike && <BoardLikeOnIc />}
          </button>
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
