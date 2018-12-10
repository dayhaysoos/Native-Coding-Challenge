import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Modal } from 'react-native';

//actions
import { addKitty } from '../redux/actions/kittyActions';

//components
import KittyList from '../components/ManageKitties/KittyList';
import AddKittyButton from '../components/ManageKitties/AddKittyButton';
import AddKittyForm from '../components/ManageKitties/AddKittyForm';

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: coral;
  padding-top: 60;
`;

const ListContainer = styled.View`
`;

const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

const mapStateToProps = ({ kitties }) => ({
    allKitties: kitties.allKitties
});

const mapDispatchToProps = {
    addKitty
};
class ManageKitties extends Component {

    state = {
        modalVisible: false
    }

    renderKittyForm = () => {
        this.setState({
            modalVisible: true
        });
    };

    closeModal = () => {
        this.setState({
            modalVisible: false,
        });
    }

    addKitty = (kitty) => {
        const { addKitty } = this.props;
        addKitty(kitty);
        this.closeModal();
    }
    render() {
        const { allKitties } = this.props;
        const { modalVisible } = this.state;

        return (
            <MainContainer>
                {
                    modalVisible ?
                        <Modal
                            animationType="fade"
                            visible={modalVisible}
                            transparent={true}
                            onRequestClose={() => 'closed'}
                        >
                            <ModalView>
                                <AddKittyForm addKitty={this.addKitty} closeModal={this.closeModal} />
                            </ModalView>
                        </Modal>
                        :
                        null
                }
                <ListContainer>
                    <KittyList allKitties={allKitties} />
                </ListContainer>
                <AddKittyButton renderKittyForm={this.renderKittyForm} />
            </MainContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageKitties);