// @flow
import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {H1} from "native-base";

import Styles from "./Styles";

import variables from "../../native-base-theme/variables/commonColor";

type RecentGroupProps = {
    groupname: string,
    relation: number
};

export default class RecentGroup extends React.PureComponent<RecentGroupProps> {
    render(): React.Node {
        const { groupname, relation} = this.props;
        return (
            <View style={style.container}>
                <View style={[style.count, Styles.center, style.leftCell]}>
                    <H1 style={style.heading}>{`${groupname}`}</H1>
                    <Text style={Styles.grayText}>GROUPNAME</Text>
                </View>
                <View style={[style.count, Styles.center]}>
                    <H1 style={style.heading}>{`${relation}`}</H1>
                    <Text style={Styles.grayText}>RELATION</Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopWidth: variables.borderWidth,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    leftCell: {
        borderRightWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    count: {
        flex: 0.5,
        padding: variables.contentPadding * 2
    },
    heading: {
        color: "white"
    }
});
