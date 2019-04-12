// @flow
import moment from "moment";
import * as React from "react";
import {View, Image, StyleSheet, Dimensions, AsyncStorage} from "react-native";
import {H1, Text} from "native-base";

import {BaseContainer, TaskOverview, Images, Styles} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

export default class Userprofile extends React.PureComponent<ScreenProps<>> {
    state = {
        data: [],
        names: [],
        email: [],
        id: [],
      }; 
componentWillMount(){
    this.groupinfo()
}
    groupinfo = async() => {
        const apikey = await AsyncStorage.getItem("apikey");
        const email = await AsyncStorage.getItem("useremail");
        console.log(email);
                     fetch("https://api.mybizzmail.com/v1/relation/?email=" + email ,  {
                      method: 'GET',
                      timeout:2000,
                          headers: {
                          Authorization : apikey,
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                    }).then(response => response.json())
                    .then(response => {
                      const datas = response.items;
                      console.log(datas);
                      this.setState({ data: datas});
                      const names = this.state.data.map(value => value.firstname);
                      const name = names.toString();
                      this.setState({ names: name});
                      const lastnames = this.state.data.map(value => value.lastname);
                      const lastname = lastnames.toString();
                      this.setState({ lastnames: lastname});
                      const companys = this.state.data.map(value => value.company);
                      const company = companys.toString();
                      this.setState({ company: company});
                      const emails = this.state.data.map(value => value.email);
                      this.setState({ emails: emails});
                      const phonenumber = this.state.data.map(value => value.phonenumber_mobile);
                      this.setState({ phonenumber : phonenumber})
                      const note = this.state.data.map(value => value.note);
                      this.setState({ note : note})
                    })
                   
         };
    render(): React.Node {
        const today = moment();
        return (
            <BaseContainer title={this.state.names} navigation={this.props.navigation} scrollable>
                <Image source={Images.userprofile} style={style.img} />
                <View style={style.row}>
                <View style={style.section}>
                    <H1>Name : {this.state.names + " " + this.state.lastnames } </H1>
                    </View>
                    <View style={style.section}>
                    <Text style={Styles.textCentered}>Email : {this.state.emails}</Text>
                    </View>
                    </View>
                    <View style={style.section}>
                    <Text style={Styles.textCentered}>Company : {this.state.company}</Text>
                    </View>
                    <View style={style.section}>
                    <Text style={Styles.textCentered}>Phonenumber : {this.state.phonenumber}</Text>
                    </View>
                    <View style={style.section}>
                    <Text style={Styles.textCentered}>Note : {this.state.note}</Text>
                    </View>
            </BaseContainer>
        );
    }
}

const {width} = Dimensions.get("window");
const style = StyleSheet.create({
    img: {
        width,
        height: width * (200 / 400),
        resizeMode: "cover"
    },
    row: {
        justifyContent: "center",
        alignItems: "center",
        padding: variables.contentPadding * 2
    },
    section: {
        padding: variables.contentPadding * 2,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    }
});
