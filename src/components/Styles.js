// @flow
import {StyleSheet, Dimensions} from "react-native";

import variables from "../../native-base-theme/variables/commonColor";

const {width} = Dimensions.get("window");
const Styles = StyleSheet.create({
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
    },
    date: {
        padding: variables.contentPadding * 2
    },
    header: {
        width,
        height: width * (440 / 750)
    },
    flexGrow: {
        flex: 1
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    textCentered: {
        textAlign: "center"
    },
    bg: {
        backgroundColor: "white"
    },
    row: {
        flexDirection: "row"
    },
    whiteBg: {
        backgroundColor: "white"
    },
    whiteText: {
        color: "white"
    },
    grayText: {
        color: variables.listBorderColor
    },
    listItem: {
        flexDirection: "row",
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor,
        marginHorizontal: variables.contentPadding * 2
    },
    form: {
        marginHorizontal: variables.contentPadding * 2,
        height: 100,
    }
});

export default Styles;
