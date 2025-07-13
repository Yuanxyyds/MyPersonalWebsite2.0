import { useEffect, useState } from 'react';
import "./../../style/common/loader.css";

const InPageLoader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullpage-loader">
      <h4 className="loader-text">Just a moment — Magic is Happening{dots}</h4>
    </div>
  );
};

export default InPageLoader;
