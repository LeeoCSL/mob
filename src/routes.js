import {createStackNavigator, createAppContainer} from 'react-navigation'

import Login from './screens/login';
import Map from './screens/map';
import Register from './screens/Register';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Map,
        Register,
    })
);

export default Routes;