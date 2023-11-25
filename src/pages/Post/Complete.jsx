import Button from '../../components/common/Button/Button';
const Complete = () => {
  return (
    <>
      <div>
        <div>
          <span>당신의 내일이</span>
          <span>저장되었습니다.</span>
        </div>
        <span>내일 밤 10시에 메일로 보내드릴게요</span>
        <input type="text" placeholder="이메일을 입력해주세요" />
      </div>
      <Button>누군가의 내일 보러가기</Button>
    </>
  );
};

export default Complete;
