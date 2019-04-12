// @flow
import moment from "moment";
import * as React from "react";
import {View, Image, StyleSheet, Dimensions} from "react-native";
import {H1, Text} from "native-base";

import {BaseContainer, TaskOverview, Images, Styles} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

export default class Test extends React.PureComponent<ScreenProps<>> {
    componentWillMount() {
        this.fetchData();
      }
      veder = async(id) =>  {
        Vibration.vibrate(10);
        const apikey = await AsyncStorage.getItem("apikey");
        console.log(id);
        fetch("https://api.mybizzmail.com/v1/group/" + id,  {
            method: 'GET',
            timeout:2000,
                headers: {
                Authorization : apikey,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
             const groepd = response.id.toString();
            AsyncStorage.setItem("groepid", groepd).then(
              () => AsyncStorage.getItem("groepid")
                    .then((result)=>console.log(result)))
      
    });
          Alert.alert('GroupSelect',
    
          "This group has been selectected",
          [
            {text: 'Go Back to Settings',
            onPress: () =>Actions.pop()},
            {
              text: 'Choose different group', 
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            /*{text: 'OK', onPress: () => console.log('OK Pressed')},*/
          ],
          {cancelable: false},);
          
      }
      fetchData = async() => {
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group', {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                  console.log(response);
                 const id = response.items;
                 this.setState({ data: id});
                  return (
                    {response}         
                  );
                  });
      };
    
    render(): React.Node {
        const today = moment();
        return (
            <BaseContainer title="ShowGroup" navigation={this.props.navigation} scrollable>
                <Image source={Images.profile} style={style.img} />
                <View style={style.row}>
                    <H1>{today.format("MMMM")}</H1>
                    <Text style={Styles.textCentered}>Good job! 9% more completed tasks this month.</Text>
                </View>
                <TaskOverview completed={49} overdue={8} />
            </BaseContainer>
        );
    }
}

const {width} = Dimensions.get("window");
const style = StyleSheet.create({
    img: {
        width,
        height: width * (500 / 750),
        resizeMode: "cover"
    },
    row: {
        justifyContent: "center",
        alignItems: "center",
        padding: variables.contentPadding * 2
    }
});
