// @flow
import * as React from "react";
import {View, StyleSheet, Image, SafeAreaView} from "react-native";
import {Button, Footer, FooterTab, Text, Icon, H2} from "native-base";
import Swiper from "react-native-swiper";
import {EvilIcons} from "@expo/vector-icons";

import {Styles, Images, WindowDimensions} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

export default class Walkthrough extends React.Component<ScreenProps<>> {

    // $FlowFixMe
    swiper = React.createRef();

    home = () => this.props.navigation.navigate("Main")

    renderPagination = (): React.Node => (
        <View>
            <Footer style={{ borderTopWidth: variables.borderWidth, borderBottomWidth: variables.borderWidth }}>
                <FooterTab>
                    <Button onPress={this.home} transparent>
                        <Text>SKIP</Text>
                    </Button>
                    <Button transparent onPress={() => this.swiper.current.scrollBy(1)} style={style.next}>
                        <Text>NEXT</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    )

    render(): React.Node {
        const {renderPagination} = this;
        return (
            <SafeAreaView style={style.container}>
                <Image source={Images.walkthrough} style={style.img} />
                {
                    // $FlowFixMe
                    <Swiper
                        ref={this.swiper}
                        height={swiperHeight}
                        dot={<Icon name="ios-radio-button-off-outline" style={style.dot} />}
                        activeDot={<Icon name="ios-radio-button-on" style={style.dot} />}
                        {...{ renderPagination }}
                    >
                        <View style={[Styles.center, Styles.flexGrow]}>
                        <Image source={Images.defaultAvatar} style={style.image} />
                            <H2>Welcome to MyBizzmail app</H2>
                            <Text>You can add relations by Form, </Text>
                            <Text>QR Code Scanning... </Text>
                            <Text>and hopefuly by BuisnessCard Scanner.</Text>
                        </View>
                        <View style={[Styles.center, Styles.flexGrow]}>
                        <Text>
                            <Icon name="ios-add-circle" style={[style.largeIcon, Styles.center]} />
                             </Text>
                            <Text>Press this button in the Bottom of the Screen</Text> 
                                <Text>to add relations</Text>
                        </View>
                        <View style={[Styles.center, Styles.flexGrow]}>
                        <Text>
                        <EvilIcons name="navicon" size={69} color="white" />
                             </Text>
                            <Text>Press this button in the top Left of the Screen</Text> 
                                <Text>to open the menu</Text>
                        </View>
                    </Swiper>
                }
            </SafeAreaView>
        );
    }
}

// eslint-disable-next-line react/prefer-stateless-function
class Phone extends React.PureComponent<{}> {
    render(): React.Node {
        return (
            <View style={style.phone}>
                <View style={style.phoneContainer}>
                    <Icon name="ios-checkmark-circle-outline" style={style.phoneContainerIcon} />
                </View>
                <View style={style.phoneFooter}>
                    <Icon name="ios-radio-button-off" style={style.phoneFooterIcon} />
                </View>
            </View>
        );
    }
}

const {height} = WindowDimensions;
const borderWidth = variables.borderWidth * 2;
const swiperHeight = height;
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Image: {
        width: 350,
        height: 80,
        resizeMode: "cover",
        marginBottom: 70,
    },
    img: {
        ...WindowDimensions,
        ...StyleSheet.absoluteFillObject
    },
    next: {
        borderRadius: 0,
        borderLeftWidth: variables.borderWidth,
        marginLeft: variables.borderWidth,
        borderColor: "white"
    },
    phone: {
        borderColor: "white",
        borderWidth,
        borderRadius: 4,
        height: 175,
        width: 100,
        marginBottom: variables.contentPadding
    },
    phoneContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center"
    },
    phoneFooter: {
        flex: 0.2,
        borderColor: "white",
        borderTopWidth: borderWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    dot: {
        fontSize: 12,
        margin: 4
    },
    phoneContainerIcon: {
        fontSize: 45
    },
    phoneFooterIcon: {
        fontSize: 15
    },
    largeIcon: {

        fontSize: 64,
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    }
});
