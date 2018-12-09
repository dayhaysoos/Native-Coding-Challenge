import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-size: 24;
`;

class ManageKitties extends Component {
    render() {
        return (
            <MainContainer>
                <Text>Manage Kitties</Text>
            </MainContainer>
        );
    }
}

export default ManageKitties;