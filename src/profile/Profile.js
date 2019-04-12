// @flow
import moment from "moment";
import * as React from "react";
import {View, Image, StyleSheet, Dimensions, AsyncStorage} from "react-native";
import {H1, Text} from "native-base";

import {BaseContainer, TaskOverview, Images, Styles} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

export default class Profile extends React.PureComponent<ScreenProps<>> {
    state = {
        firstname: "",
        lastname: "",
        email:"",
    }
    componentWillMount(){
        this.fetchdata()
    }
    fetchdata = async() =>{
        const apikey = await AsyncStorage.getItem("apikey");  
        const token = await AsyncStorage.getItem("token");
        fetch('https://api.mybizzmail.com/v1/user/get', {
            method: 'GET',
            timeout:1000,
            params:  {
                'token': token,
              },
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
                .then(response => {
                  console.log(response); 
                  const name = response.relation.firstname.toString();
                  this.setState({firstname : name})
                  const email = response.relation.email.toString();
                  this.setState({email : email})
                  const lastname = response.relation.lastname.toString();
                  this.setState({lastname : lastname})
                  console.log(name)           
          });          
    }
    render(): React.Node {
        const today = moment();
        return (
            <BaseContainer title={this.state.firstname} navigation={this.props.navigation} scrollable>
                <Image source={Images.userprofile} style={style.img} />
                <View style={style.row}>
                <View style={style.section}>
                   <H1>Name : {this.state.firstname} {this.state.lastname}</H1>
                </View>
                <View style={style.section}>
                    <Text style={Styles.textCentered}>Email : {this.state.email}</Text>
                </View>
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
