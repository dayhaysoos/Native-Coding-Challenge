import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.View`
  
`;

const HeaderText = styled.Text`
  font-size: 24;
  color: white;
  text-align: center;
`;

const Input = styled.TextInput`
  height: 40;
  border-color: white;
  border-width: 1;
  width: 300;
`;

const Text = styled.Text`
    color: white;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
`;


const CloseButtonWrapper = styled.TouchableOpacity`
  width: 100;
  height: 70;
  border-radius: 8;
  border-width: 1;
  border-color: white;
`;

const CloseButtonText = styled.Text`
  color: white;
`;

class AddKittyForm extends Component {

    state = {
        kittyName: '',
        kittyColor: '',
    };

    handleKittyAdd = () => {
        const { addKitty } = this.props;
        const { kittyName, kittyColor } = this.state;
        addKitty({
            kittyName,
            kittyColor
        });
    }

    render() {
        const { closeModal } = this.props;

        return (
            <MainContainer>
                <HeaderText>Add Kitty</HeaderText>
                <Text>Name</Text>
                <Input
                    onChangeText={(text) => this.setState({ kittyName: text })}
                    autoCorrect={false}
                />
                <Text>Color</Text>
                <Input
                    onChangeText={(text) => this.setState({ kittyColor: text })}
                    autoCorrect={false}
                />
                <ButtonWrapper>
                    <CloseButtonWrapper onPress={closeModal}>
                        <CloseButtonText>Go Back</CloseButtonText>
                    </CloseButtonWrapper>
                    <CloseButtonWrapper onPress={this.handleKittyAdd}>
                        <CloseButtonText>Add Kitty</CloseButtonText>
                    </CloseButtonWrapper>
                </ButtonWrapper>
            </MainContainer>
        );
    }
}

export default AddKittyForm;