import React from 'react';
import styled from 'styled-components';

// Pass through mode for image

const StyledMainImage = styled.div`
  img {
    filter: invert(${props => (props.darkmode ? 1 : 0)});
  }
`;

const HomePage = ({ darkmode }) => {
  return (
    <StyledMainImage darkmode={darkmode}>
      <img className="MainImage" src="../imgs/topdownbug.png" alt="Main Image" />
    </StyledMainImage>
  );
};

export default HomePage;