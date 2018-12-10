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
},
{
    defaultNavigationOptions: {
        headerTitle: 'Kitty Dex',
        headerTitleStyle: {
            marginTop: 20,
            color: 'white'
        },
        headerStyle: {
            backgroundColor: 'coral'
        },
        headerTruncatedBackTitle: 'Back'
    }
}
);

export default createAppContainer(AppNavigtor);



