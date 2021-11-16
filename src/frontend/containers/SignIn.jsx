import React from 'react';
// Components
import MenuNav from '../components/MenuNav';
import SignInWrapper from '../components/SignInWrapper';
//styles
import '../assets/styles/SignIn.styl';

function SignIn(props) {
  const { history } = props;
  return (
    <>
      <MenuNav />
      <SignInWrapper history={history} />
    </>
  );
}
export default SignIn;
