import Header from '../../components/index/header';
import SubNavBar from '../../components/index/sub-nav-bar/sub-nav-bar';
import { useState } from 'react';

const Welcome = () => {
  const [subNavToggle, setSubNavToggle] = useState('contact');
  // welcome으로 바꾸기

  return (
    <>
      <Header />
      <SubNavBar
        subNavToggle={subNavToggle}
        setSubNavToggle={setSubNavToggle}
      />
    </>
  );
};

export default Welcome;
