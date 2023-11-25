import { useNavigate } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();

  const handleRouter = (url) => {
    navigate(url);
  };

  return { handleRouter };
};

export default useRouter;

// 사용 예시
//import useRouter from '@hooks/useRouter';

// const { handleRouter } = useRouter();

// const handleEvent = () => {
//   handleRouter('/main');
// };
