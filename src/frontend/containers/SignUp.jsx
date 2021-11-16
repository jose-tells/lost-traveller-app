import React from 'react';
// Components
import MenuNav from '../components/MenuNav';
import SignUpWrapper from '../components/SignUpWrapper';
// Styles
import '../assets/styles/SignUp.styl';

const SingUp = (props) => {
  const { history } = props;
  return (
    <>
      <MenuNav />
      <SignUpWrapper history={history} />
    </>
  );
};
export default SingUp;
