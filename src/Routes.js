import { createStackNavigator, createAppContainer } from 'react-navigation';

// containers
import HomeScreen from './containers/HomeScreen';
import ManageKitties from './containers/ManageKitties';

const AppNavigtor = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    ManageKitties: {
        screen: ManageKitties,
    }
});

export default createAppContainer(AppNavigtor);



