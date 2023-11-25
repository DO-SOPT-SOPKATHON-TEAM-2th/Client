import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

/** Splash page */
const Splash = () => {
  const [a, setA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setA(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <div>
        <BBB>나는</BBB>
        {a && <CC> 오늘,</CC>}
        {!a && <span>,</span>}
      </div>
      <div>
        <span>내일</span>
        {a && (
          <>
            <CC>의 나와</CC>
            <CCC>만난다.</CCC>
          </>
        )}
      </div>
    </Box>
  );
};

export default Splash;

const Box = styled.div`
  font-size: 5rem;
`;

const goLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-10rem);
  }
`;

const boxFade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const BBB = styled.p`
  display: inline-block;
  animation: ${goLeft} 2s 5s linear forwards;
`;

const CC = styled.span`
  animation: ${boxFade} 20s linear;
`;
const CCC = styled.p`
  animation: ${boxFade} 20s linear;
`;
