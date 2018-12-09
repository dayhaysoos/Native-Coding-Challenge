import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainContainer = styled.TouchableOpacity`
  height: 100;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: white;
`;

const NavScreenText = styled.Text`
  color: white;
  font-size: 24;
`;

const NavButton = ({ text, navigateTo }) => (
    <MainContainer onPress={navigateTo}>
        <NavScreenText>{text}</NavScreenText>
    </MainContainer>
);

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    navigateTo: PropTypes.func.isRequired
};

export default NavButton;
