// @flow
/* eslint-disable no-console, global-require, no-nested-ternary, react/jsx-indent */
import * as React from "react";
import {Dimensions} from "react-native";
import {StyleProvider} from "native-base";
import {
    createAppContainer, createSwitchNavigator, createDrawerNavigator
} from "react-navigation";
import {Font, AppLoading} from "expo";

import {Images} from "./src/components";
import {Login} from "./src/login";
import {SignUp} from "./src/sign-up";
import {Walkthrough} from "./src/walkthrough";
import {Drawer} from "./src/drawer";
import {Home} from "./src/home";
import {Calendar} from "./src/calendar";
import {Overview} from "./src/overview";
import {Groups} from "./src/groups";
import {Lists} from "./src/lists";
import {Profile} from "./src/profile";
import {Timeline} from "./src/timeline";
import {Settings} from "./src/settings";
import {Postuser} from "./src/postuser";
import {Showgroup} from "./src/showgroup";
import {Useringroup} from "./src/useringroup";
import {Scanner} from "./src/scanner";
import {Create} from "./src/create";
import {Create1} from "./src/create1";
import getTheme from "./native-base-theme/components";
import variables from "./native-base-theme/variables/commonColor";


type AppState = {
    ready: boolean
};

export default class App extends React.Component<{}, AppState> {
    
    state = {
        ready: false
    };

    componentWillMount() {
        const promises = [];
        promises.push(Font.loadAsync({
            "Avenir-Book": require("./fonts/Avenir-Book.ttf"),
            "Avenir-Light": require("./fonts/Avenir-Light.ttf")
        }));
        Promise.all(promises.concat(Images.downloadAsync()))
            .then(() => this.setState({ ready: true }))
            // eslint-disable-next-line
            .catch(error => console.error(error));
    }

    render(): React.Node {
        const {ready} = this.state;
        return (
            <StyleProvider style={getTheme(variables)}>
                {
                    ready
                        ?
                        <AppNavigator onNavigationStateChange={() => undefined} />
                        :
                        <AppLoading startAsync={null} onError={null} onFinish={null} />
                }
            </StyleProvider>
        );
    }
}
/* this is the main navigator This will probaly not change*/
const MainNavigator = createDrawerNavigator({
    Home: { screen: Home },
    Calendar: { screen: Calendar },
    Overview: { screen: Overview },
    Groups: { screen: Groups },
    Lists: { screen: Lists },
    Profile: { screen: Profile },
    Timeline: { screen: Timeline },
    Settings: { screen: Settings },
    Showgroup: { screen: Showgroup},
    Create: { screen: Create },
    Create1: { screen: Create1},
    Postuser: { screen: Postuser},
    Scanner : {screen : Scanner},
}, {
    drawerWidth: Dimensions.get("window").width,
    // eslint-disable-next-line flowtype/no-weak-types
    contentComponent: (Drawer: any),
    drawerBackgroundColor: variables.brandInfo
});

const AppNavigator = createAppContainer(createSwitchNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Walkthrough: { screen: Walkthrough },
    Main: { screen: MainNavigator },
    Useringroup: { screen: Useringroup},
}, {
    headerMode: "none",
    cardStyle: {
        backgroundColor: variables.brandInfo
    }
}));

export {AppNavigator};
