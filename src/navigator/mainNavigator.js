import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen12111820Navigator from '../features/BlankScreen12111820/navigator';
import Settings111807Navigator from '../features/Settings111807/navigator';
import UserProfile111800Navigator from '../features/UserProfile111800/navigator';
import Settings111799Navigator from '../features/Settings111799/navigator';
import Settings111797Navigator from '../features/Settings111797/navigator';
import SignIn2111795Navigator from '../features/SignIn2111795/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen12111820: { screen: BlankScreen12111820Navigator },
Settings111807: { screen: Settings111807Navigator },
UserProfile111800: { screen: UserProfile111800Navigator },
Settings111799: { screen: Settings111799Navigator },
Settings111797: { screen: Settings111797Navigator },
SignIn2111795: { screen: SignIn2111795Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
