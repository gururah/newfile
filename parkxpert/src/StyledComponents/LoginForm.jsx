import React, { useState } from 'react';
import { IconButton, Typography, Box, Button } from '@mui/material';
import styled from 'styled-components';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormContainer = styled(Box)`
  width: 60%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 2%;
`;

const Label = styled(Typography)`
  font-family: Inter;
  font-weight: 500;
  margin-bottom: 2%;
  font-size: 2rem;
  color: #333;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 2%;
  margin-bottom: 4%;
  border: 1px solid #EAECEE;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: #EAECEE;
  color="#8396A8"
`;

const CustomButton = styled(Button)`
&& {
  margin-top: 10px;
  background-color: #00205c;
  color: white;
  text-transform: none; 
  &:hover {
    background-color: #001a4a;
  }
}
`;

const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInputField = styled(InputField)`
  padding-right: 10%; 
  background-color: #EAECEE;
  color="#8396A8"
`;

const PasswordToggleIcon = styled(IconButton)`
  bottom: 48px;
  left: 88%;
  position: absolute;
`;

const UnderlinedTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  // margin-top: 10%;
`;

const UnderlinedText = styled(Typography)`
  font-size: 1rem;
  color: #00205c;
  cursor: pointer;
  &:hover {
    color: #001a4a;
  }
`;
const UnderlinedText1 = styled(Typography)`
  font-size: 1rem;
  margin-top:10%
  color: #00205c;
  cursor: pointer;
  &:hover {
    color: #001a4a;
  }
`;

const ErrorText = styled(Typography)`
  color: red;
  font-size: 0.9rem;
  margin-top: -2%;
  margin-bottom: 4%;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(''); // Clear error when user starts typing
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(''); // Clear error when user starts typing
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };
  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])/;
    return passwordRegex.test(password);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must contain at least one special character.');
      return;
    }

    console.log('Sign In:', { email, password });
  };
  const handleSignupFree = () => {
      console.log('Signup free clicked');
  };

  const handleForgetPassword = () => {
    console.log('Forget Password clicked');
  };

  const handleResetPassword = () => {
    console.log('Reset Password clicked');
  };

  return (
    <FormContainer>
      <Label>Email ID</Label>
      <InputField
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your Email ID"
      />
      <Label>Password</Label>
      <PasswordInputContainer>
        <PasswordInputField
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your Password"
        />
        <PasswordToggleIcon onClick={handleTogglePasswordVisibility}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </PasswordToggleIcon>    
      </PasswordInputContainer>
      {error && <ErrorText>{error}</ErrorText>}
      <UnderlinedTextContainer>
        <UnderlinedText onClick={handleForgetPassword}>Forget Password?</UnderlinedText>
        <UnderlinedText onClick={handleResetPassword}>Reset Password</UnderlinedText>
      </UnderlinedTextContainer>
      <CustomButton variant="contained" fullWidth onClick={handleSignIn}>
        Sign In
      </CustomButton>
      <UnderlinedTextContainer>
        <UnderlinedText1 onClick={handleSignupFree}>Don’t have an account ?  Sign up for Free</UnderlinedText1>
      </UnderlinedTextContainer>
    </FormContainer>
  );
};

export default LoginForm;
