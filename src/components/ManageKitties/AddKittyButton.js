import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.TouchableHighlight`
  height: 80;
  border-width: 2;
  border-radius: 8;
  width: 80%;
  border-color: white;
  margin-bottom: 40;
`;

const ButtonText = styled.Text`
  font-size: 16;
  color: white;
  text-align: center;
`;

const AddKittyButton = ({ renderKittyForm }) => (
    <Button onPress={renderKittyForm}>
        <ButtonText>Add Kitty</ButtonText>
    </Button>
);

AddKittyButton.propTypes = {
    renderKittyForm: PropTypes.func
};

export default AddKittyButton;