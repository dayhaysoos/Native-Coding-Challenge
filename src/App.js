import React, { Component } from 'react';
import styled from 'styled-components';

import AppNavigator from './Routes';

const View = styled.View`
  flex: 1;
  background-color: coral;
`;


class App extends Component {
    render() {
        return (
            <View>
                <AppNavigator />
            </View>
        );
    }
}

export default App;