import React from 'react';
import Park from '../Images/parking.png';
import styled from 'styled-components';
// import Startpage1 from './Startpage1';
// import Startpage2 from './Startpage2';

const ParkPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
  background-image: url(${Park});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
`;

const ParkPage = () => {
  return (
    <ParkPageContainer>
     {/* <Startpage1/> */}
     {/* <Startpage2/> */}
    </ParkPageContainer>
  );
};

export default ParkPage;
