import SplashImg from '@assets/images/splashImg.png';

/** Splash page */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <img src={SplashImg} alt="splash-img" width={375} height={667} />
    </>
  );
};

export default Splash;
