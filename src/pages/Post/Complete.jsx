import styled from 'styled-components';
import { NavigationLeftIc } from '@assets';
import Button from '@components/common/Button/Button';
import useRouter from '@hooks/useRouter';
const Complete = () => {
  // const [isActive, setIsActive] = useState(false);
  const { handleRouter } = useRouter();
  const handleOnClickView = () => {
    handleRouter('/board');
  };

  // const handleOnChange = (e) => {
  //   if (e.target.value !== '') {
  //     setIsActive(true);
  //   }
  // };

  // useEffect(() => {
  //   handleOnChange();
  // }, []);

  return (
    <>
      <St.CompleteWrapper>
        <NavigationLeftIc />
        <St.TextWrapper>
          <div>당신의 내일이</div>
          <div>저장되었습니다.</div>
        </St.TextWrapper>
        <St.TextEx>내일 밤 10시에 메일로 보내드릴게요</St.TextEx>
        <St.EmailInput type="text" placeholder="이메일을 입력해주세요" />
      </St.CompleteWrapper>
      <Button onClick={handleOnClickView}>누군가의 내일 보러가기</Button>
    </>
  );
};

export default Complete;

const St = {
  CompleteWrapper: styled.div`
    padding: 6rem 1.7rem 0 1.7rem;
  `,
  TextWrapper: styled.div`
    margin-top: 2.1rem;
    margin-bottom: 1.2rem;
    ${({ theme }) => theme.fonts.Head};
    color: ${({ theme }) => theme.colors.white};
  `,

  TextEx: styled.span`
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.Caption};
  `,

  EmailInput: styled.input`
    display: flex;
    width: 34.3rem;
    height: 5.6rem;
    padding: 1.6rem;
    align-items: flex-start;
    gap: 1rem;
    flex-shrink: 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray400};
    color: ${({ theme }) => theme.colors.white};
    margin-top: 3.3rem;
    ${({ theme }) => theme.fonts.Body};
  `,
};
