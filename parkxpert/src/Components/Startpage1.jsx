import React from 'react';
import Car from '../Images/car.png';
import styled from 'styled-components';
import { Grid } from '@mui/material';
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 620px;
  // margin-top: 70px;
  // margin-left: 320px;
  border-radius: 15px;  
  background: #FFFFFF;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 66.72px;
  height: 66.72px;
`;

const Typography = styled.h4`
  font-family: Ubuntu;
  color: #00205C;
  font-size: 60.26px;
  font-style: italic;
  font-weight: 700;
  line-height: 69.24px;
  text-align: left;
  margin-left: 20px; /* Add some margin to create space between the image and text */
`;


const Startpage1 = () => {
  return (
    <StyledContainer>
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <StyledImage src={Car} alt="car" />
      </Grid>
      <Grid item>
        <Typography>ParkXpert</Typography>
      </Grid>
    </Grid>
  </StyledContainer>
  );
};

export default Startpage1;
