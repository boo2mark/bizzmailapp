// @flow
import * as React from "react";
import {View, Dimensions, Image, StyleSheet, AsyncStorage,} from "react-native";
import {Text, Icon, Button, H1} from "native-base";

import {BaseContainer, Images, Field, SingleChoice, Styles} from "../components";
import type {ScreenProps} from "../components/Types";
import { Actions } from 'react-native-router-flux';
import variables from "../../native-base-theme/variables/commonColor";

export default class Settings extends React.PureComponent<ScreenProps<>> {
    state ={
        selectedgroup : "",
        selectedgroup1 : "",
        selectedgroup2 : "",
    }
    componentWillMount(){
        this.Getgroup();
    }
    componentWillUpdate(){
        this.Getgroup();
        this.Getgroup1();
        this.Getgroup2();
        this.Getgroup3();
    }
    Getgroup = async() =>{
        const SelectedGroup = await AsyncStorage.getItem("groupids");
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                
                 const name = response.name;
                 this.setState({selectedgroup : name});
                  });
  
      
        
    }
    Getgroup1 = async() =>{
        const SelectedGroup1 = await AsyncStorage.getItem("groupids1");
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup1, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                 
                 const name = response.name;
                 this.setState({selectedgroup1 : name});
                  });
  
      
        
    }
    Getgroup2 = async() =>{
        const SelectedGroup2 = await AsyncStorage.getItem("groupids2");
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup2, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
               
                 const name = response.name;
                 this.setState({selectedgroup2 : name});
    
                  });
      
        
    }
    Getgroup3 = async() =>{
        const SelectedGroup3 = await AsyncStorage.getItem("groupids3");
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup3, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => { 
                 const name = response.name;
                 this.setState({selectedgroup3 : name});
                  });
  
      
        
    }
    group(){
        Actions.groupselect();
    }
    group1(){
        Actions.groupselect2();
    }
    group2(){
        Actions.groupselect3();
    }
    group3(){
        Actions.groupselect4();
    }
    render(): React.Node {
        return (
            <BaseContainer title="Settings" navigation={this.props.navigation} scrollable>
                <View style={style.section}>
                    <Text>GENERAL</Text>
                </View>
                <View>
                <View style={style.section}>
                    <H1>Selected Group</H1>
                    <Text>Groupname : {this.state.selectedgroup}</Text>
                    <Button primary full onPress={this.group}>
                    <Text>Choose Different Group</Text>
                    </Button>

                </View>
                <View style={style.section}>
                    <H1>HomePage Groups</H1>
                    <Text style={Styles.whiteText}>3-Groups maximum</Text>
                    <Text>Groupname : {this.state.selectedgroup1}</Text>
                    <Button primary full onPress={this.group1}>
                    <Text>Choose Different Group</Text>
                    </Button>
                    <Text>Groupname : {this.state.selectedgroup2}</Text>
                    <Button primary full onPress={this.group2}>
                    <Text>Choose Different Group</Text>
                    </Button>
                    <Text>Groupname : {this.state.selectedgroup3}</Text>
                    <Button primary full onPress={this.group3}>
                    <Text>Choose Different Group</Text>
                    </Button>
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
        height: width * (500 / 750)
    },
    add: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: 25,
        position: "absolute",
        bottom: variables.contentPadding,
        left: variables.contentPadding,
        alignItems: "center",
        justifyContent: "center"
    },
    section: {
        padding: variables.contentPadding * 2,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    }
});
