/** Board page */
import { NavigationLeftIc, BoardLikeOffIc } from '@assets';
import Button from '../common/Button/Button';

const Board = () => {
  return (
    <section>
      <header>
        <NavigationLeftIc />
        <h1>게시판</h1>
      </header>
      <p>
        <strong>R=VD</strong>
        <span> 내일을 기다리는 사람이 </span>
        <strong>32명</strong>
        <span> 있어요.</span>
      </p>
      <div>
        <article>
          <h2>줄넘기를 한다는 것</h2>
          <p>
            내일은 나는 이걸 할 것이다. 줄넘기를 할것이다. 그리고 뛸 것이다. 내일은 나는 이걸 할것이다. 줄넘기를
            할것이다.
          </p>
          <p>bye091790</p>
          <BoardLikeOffIc />
        </article>
      </div>
      <Button disabled={true}>내일 일기 쓰기</Button>
    </section>
  );
};

export default Board;
