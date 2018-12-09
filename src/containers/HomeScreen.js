import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//components
import NavButton from '../components/HomeScreen/NavButton';

const HomeContainer = styled.View`
  background-color: coral;
  flex: 1;
`;

const WelcomeText = styled.Text`
  font-size: 24;
  height: 100;
  text-align: center;
  color: white;
`;

class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }


    render() {
        const { navigation } = this.props;

        return (
            <HomeContainer>
                <WelcomeText>
                    Welcome to Kitty Dex
                </WelcomeText>
                <NavButton
                    text={'Manage Kitties'}
                    navigateTo={() => navigation.navigate('ManageKitties')}
                />
            </HomeContainer>
        );
    }
}

export default HomeScreen;