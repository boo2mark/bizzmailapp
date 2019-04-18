// @flow
import * as React from "react";
import {View, StyleSheet, Image, TouchableHighlight, Alert} from "react-native";
import {Button, Icon, Header, Text, Left, Title, Body, Right} from "native-base";
import {Constants} from "expo";
import {DrawerActions} from "react-navigation";

import {Images, Styles, WindowDimensions,  BaseContainer} from "../components";
import type {NavigationProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";
import Form from "../../native-base-theme/components/Form";
import { Actions } from "react-native-router-flux";

export default class Create1 extends React.Component<NavigationProps<>> {

    go(key: string) {
        this.props.navigation.navigate(key);
    }


    render(): React.Node {
        const {navigation} = this.props;
        return (
          
          <BaseContainer title="Relation" navigation={this.props.navigation} scrollable>
                <Image source={Images.signUp} style={style.img} />
                <View style={style.itemContainer}>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name="Scanner" icon="ios-qr-scanner-outline" left/>
                        <DrawerItem {...{navigation}} name="Form" icon="ios-person-add-outline" left/>
                    </View>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name="Card" icon="ios-card" left />
                    </View>
                </View>
         </BaseContainer>
        );
    }
}

class DrawerItem extends React.PureComponent<DrawerItemProps> {
    render(): React.Node {
        const {name, icon, left} = this.props;
        const props = {
            onPress: () =>this.checkname(name) + this.forceUpdate(),
            style: [style.item, left ? { borderRightWidth: variables.borderWidth } : undefined]
        };
        return (
            <TouchableHighlight {...props} underlayColor="rgba(255, 255, 255, .2)">
                <View style={[Styles.center, Styles.flexGrow]}>
                    <Icon name={icon} style={{ color: variables.listBorderColor }} />
                    <Text style={{ marginTop: variables.contentPadding }}>{name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    checkname(name){
      console.log(name)
      if(name == "Scanner"){
        Actions.scanner();
      }
      if(name == "Form"){
        Actions.form();
      }
      if(name == "Card"){
        alert(
          "404 Card Scanner not found........yet :)"
        )
      }
    }

}

const style = StyleSheet.create({
    img: {
        ...StyleSheet.absoluteFillObject,
        width: WindowDimensions.width,
        height: WindowDimensions.height - Constants.statusBarHeight,
        top: Constants.statusBarHeight
    },
    closeIcon: {
        fontSize: 50,
        color: variables.listBorderColor
    },
    itemContainer: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        borderColor: variables.listBorderColor,
        borderBottomWidth: variables.borderWidth
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        height: 300,
        borderColor: variables.listBorderColor
    },
    dot: {
        backgroundColor: "white",
        height: 10,
        width: 10,
        borderRadius: 5,
        position: "absolute",
        right: variables.contentPadding,
        top: variables.contentPadding,
        alignSelf: "flex-end"
    }
});

