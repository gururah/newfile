import React from 'react';
import styled from 'styled-components';
import Typography3 from '../StyledComponents/Typography3';
import Typography2 from '../StyledComponents/Typography2';
import LoginStyledContainer from '../StyledComponents/LoginStyledContainer';
import LoginForm from '../StyledComponents/LoginForm';
const StyledContainer = styled.div`
  display: flex;
  justify-content:left;
  align-items: center;
  width: 50%;
  height: 100vh;
  background: #FFFFFF;
  overflow: hidden;
  flex-direction: column;
`;

const LoginPage = () => {
  
  return (
    <LoginStyledContainer>
    <StyledContainer>
        <Typography3>Welcome Back !</Typography3>
        <Typography2>Sign-in to your account</Typography2>
        <LoginForm/>
    </StyledContainer>
    </LoginStyledContainer>
    

  )
}

export default LoginPage;
