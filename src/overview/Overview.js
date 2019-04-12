// @flow
import moment from "moment";
import * as React from "react";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import {Tab, Tabs, TabHeading, H1} from "native-base";

import {BaseContainer, Task, Styles, TaskOverview} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

const DAY = 1;
const WEEK = 2;
const MONTH = 3;

export default class Overview extends React.PureComponent<ScreenProps<>> {

    render(): React.Node {
        return (
            <BaseContainer title="Overview" navigation={this.props.navigation}>
                <Tabs>
                    <Tab heading={<TabHeading><Text style={style.tabHeading}>DAY</Text></TabHeading>}>
                        <OverviewTab period={DAY} />
                    </Tab>
                    <Tab heading={<TabHeading><Text style={style.tabHeading}>WEEK</Text></TabHeading>}>
                        <OverviewTab period={WEEK} />
                    </Tab>
                    <Tab heading={<TabHeading><Text style={style.tabHeading}>MONTH</Text></TabHeading>}>
                        <OverviewTab period={MONTH} />
                    </Tab>
                </Tabs>
            </BaseContainer>
        );
    }
}

type OverviewTabProps = {
    period: 1 | 2 | 3
};

class OverviewTab extends React.PureComponent<OverviewTabProps> {

    render(): React.Node {
        const {period} = this.props;
        let label;
        if (period === 1) {
            label = moment().format("dddd");
        } else if (period === 2) {
            label = `Week ${moment().format("W")}`;
        } else {
            label = moment().format("MMMM");
        }
        return (
            <View style={style.container}>
                    <View style={[style.tab, Styles.center]}>
                        <H1>{label}</H1>
                    </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    tabHeading: {
        color: "white"
    },
    tab: {
        padding: variables.contentPadding * 4
    }
});
