import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';

const Header = styled.Text`
  color: white;
  font-size: 24;
`;

const KittyItem = styled.Text`
  color: white;
  font-size: 16;
  border-width: 1
  border-color: white;
  height: 30;
  width: 200;
`;

class KittyList extends Component {
    render() {
        const { allKitties } = this.props;
        return (
            <FlatList
                data={allKitties}
                ListHeaderComponent={<Header>Kitty List</Header>}
                ListEmptyComponent={<Header>You have no kitties</Header>}
                renderItem={({ item }) => <KittyItem>{item.kittyName} {item.kittyColor}</KittyItem>}
                keyExtractor={(item, index) => `${item.kittyName}_${index}`}
            />
        );
    }
}

export default KittyList;