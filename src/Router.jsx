import { createBrowserRouter } from 'react-router-dom';
// import MainLayout from '@components/layout/MainLayout';
import Board from '@pages/Board/Board';
import Error from '@pages/Error/Error';
import Main from '@pages/Main/Main';
import Post from '@pages/Post/Post';
import Splash from '@pages/Splash/Splash';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Splash /> },
      { path: '/board', element: <Board /> },
      { path: '/main', element: <Main /> },
      { path: '/post', element: <Post /> },
      { path: '/splash', element: <Splash /> },
    ],
  },
]);
