import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Car from '../Images/car.png';
import Circle from '../Images/Ellipse.png';
import Robot from '../Images/robot.png';
import Shield from '../Images/shield.png';
import Red from '../Images/Ellipse2.png';
import Yellow from '../Images/Ellipse3.png';
import Ban from '../Images/ban.png';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80vh;
  height: 81vh;
  margin-left:29%;
  margin-top:5%;
  border-radius: 3%;
  background: #FFFFFF;
  overflow: hidden;
  flex-direction: column;
`;

const StyledContainer1 = styled.div`
  text-align: center;
  align-items: center;
  width: 70vh;
  height: 15vh;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 4vh;
  height: 4vh;
  top: 15%;
  left: 43%;
  opacity: 0px;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 10vh;
  height: 10vh;
  top: 40%;
  margin: 0;
`;

const StyledImage1 = styled.img`
  width: 15vh;
  height: 15vh;
  position: absolute;
`;

const StyledImage2 = styled.img`
  width: 10vh;
  height: 10vh;
  position: absolute;
`;

const Typography1 = styled.h4`
  font-family: Ubuntu;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  margin-left: 38%;
  margin-top: 8%;
  text-align: left;
  color: #00205C;
`;

const Typography3 = styled.h2`
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  margin-top: 15%;
  text-align: center;
  color: #000000;
`;

const Typography2 = styled.h6`
  font-family: Inter;
  font-size: 110%;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  color: #5B738B;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vh;
  margin-top: 10%;
  color: #00205C;
`;

const PageIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6%;
`;

const PlaceholderButton = styled.div`
  width: 100%;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#00205C' : '#C4C4C4')};
`;

const data = [
  {
    circleImage: Circle,
    robotImage: Robot,
    subtitle: 'Simplify your Work',
    description: 'Our AI model will track all vehicles that enter your building. It will create a database of all the vehicles that come in and out of your building.',
  },
  {
    circleImage: Yellow,
    robotImage: Ban,
    subtitle: 'Track Traffic Violations',
    description: 'Our AI model will detect traffic violations like speeding, triples, no helmet.',
  },
  {
    circleImage: Red,
    robotImage: Shield,
    subtitle: 'Secure your Building',
    description: 'A database of pre-registered people can be added and can weed out people who enter the premises in an unrecognized vehicle.',
  },
];

const Startpage2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/login'); // Navigate to the LoginPage
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <StyledContainer>
      <StyledContainer1>
        <StyledImage src={Car} alt="car" />
        <Typography1>ParkXpert</Typography1>
      </StyledContainer1>
      <Box>
        <StyledImageWrapper>
          <StyledImage1 src={data[currentIndex].circleImage} alt="circle" />
          <StyledImage2 src={data[currentIndex].robotImage} alt="robot" />
        </StyledImageWrapper>
      </Box>
      <StyledContainer1>
        <Typography3>{data[currentIndex].subtitle}</Typography3>
      </StyledContainer1>
      <StyledContainer1>
        <Typography2>{data[currentIndex].description}</Typography2>
      </StyledContainer1>
      <PageIndicator>
        {data.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </PageIndicator>
      <ButtonContainer>
        {currentIndex > 0 ? (
          <Button
            variant="outlined"
            onClick={handlePrevClick}
            startIcon={<ArrowBackIcon />}
            style={{
              borderColor: '#00205C',
              color: '#00205C',
              backgroundColor: 'white',
            }}
          >
            Back
          </Button>
        ) : (
          <PlaceholderButton />
        )}
        <Button
          variant="contained"
          onClick={handleNextClick}
          endIcon={<ArrowForwardIcon />}
          style={{
            backgroundColor: '#00205C',
            color: 'white',
          }}
        >
          {currentIndex === data.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default Startpage2;
