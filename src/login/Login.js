// @flow
import * as React from "react";
import {StyleSheet, Image, View, TextInput, SafeAreaView, AsyncStorage, Vibration,} from "react-native";
import {H1, Button, Text, Content} from "native-base";
import {Constants} from "expo";
import { Actions } from 'react-native-router-flux';
import Mark from "./Mark";
import {Images, WindowDimensions, Field, Small, Styles} from "../components";
import {AnimatedView} from "../components/Animations";
import type {ScreenProps} from "../components/Types";
import variables from "../../native-base-theme/variables/commonColor";
import base64 from 'react-native-base64'

export default class Login extends React.Component<ScreenProps<>> {
    state = {
        firstkey: "",
        apikey: "",
        usergroups: "",
        userlogged: "",
      }; 
    password: TextInput;
    setPasswordRef = (input: TextInput) => this.password = input._root
    goToPassword = () => this.password.focus() 
    signUp = () => {
        Actions.signup();
    }
    signIn = async() =>{
        Vibration.vibrate(10);
        this.groupinfo();
        const email = await AsyncStorage.getItem("Email")
        const password = await AsyncStorage.getItem("Password")
        fetch('https://api.mybizzmail.com/v1/login', {
      method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email' : email,
          'password' : password,
        }),
      })  
      .then(response => response.json())

      .then(response => {
         const tokenn = response.token;
         AsyncStorage.setItem("token", tokenn).then(
          () => AsyncStorage.getItem("token")
          .then((result)=>console.log(result)))
         console.log(tokenn); 
            fetch('https://api.mybizzmail.com/v1/user/get', {
              method: 'GET',
              timeout:1000,
              params:  {
                  'token': tokenn,
                },
                  headers: {
                    Authorization: base64.encode(tokenn)
                },
                })
                .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    const firstnamekey = response.relation.firstname;
                    AsyncStorage.setItem("firstkey", firstnamekey).then(
                      () => AsyncStorage.getItem("firstkey")
                      .then((result)=>console.log(result)))
                    const apikeys = response.api_key.toString();
                    console.log(apikeys);
                    AsyncStorage.setItem("apikey", apikeys).then(
                        () => AsyncStorage.getItem("apikey"))       
                    this.postapi.bind(this, apikeys);
            });          
            this.loggeduser();  
                this.checkuser();    
          }
      )
    }
    postapi = async(apikeys) =>{
        await AsyncStorage.setItem("apikey", apikeys).then(
            () => AsyncStorage.getItem("apikey"))               
    }
    loggeduser = async() =>{
        const userlogged = "logged"
        await AsyncStorage.setItem("userlogged", userlogged )
        console.log(userlogged);
      };
      checkuser = async() =>{
        const userlogg = await AsyncStorage.getItem("userlogged");
        if (userlogg == "logged"){
            this.props.navigation.navigate("Walkthrough")
            this.groupinfo();
        }
        else{
          const apikey = await AsyncStorage.getItem("apikey");  
          const username = await AsyncStorage.getItem("firstkey");
          console.log(username) 
          fetch('https://api.mybizzmail.com/v1/group', {
            method: 'POST',
                headers: {
                Authorization : apikey,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'account_id': null,
                'created_at': null,
                'created_by': null,
                'id': null,
                'name': username + "'s usergroup",
              }).then(response => {
                console.log(response); 
            })
        })      
      } 
    }
   addgroup = async() =>{
     const addgroup = this.state.usergroups;
     await  AsyncStorage.setItem("usergroup", addgroup).then(
      () => AsyncStorage.getItem("usergroup")
      .then((result)=>console.log(result)))
   }
    groupinfo = async() =>{
        const apikey = await AsyncStorage.getItem("apikey")
        const id = await AsyncStorage.getItem("usergroup");
        fetch("https://api.mybizzmail.com/v1/group/" + id ,  {
            method: 'GET',
                headers: {
                Authorization : apikey,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
          })
              .then(response => response.json())
                .then(response => {
                    console.log(response);
                     });              
}
clearAsyncStorage = async() => {
    AsyncStorage.clear();
}
    render(): React.Node {
        return (
            <View style={styles.container}>
                <Image source={Images.login} style={styles.image} />
                <SafeAreaView style={StyleSheet.absoluteFill}>
                    <Content style={[StyleSheet.absoluteFill, styles.content]}>
                        <AnimatedView style={styles.innerContent}>
                            <View style={styles.logo}>
                                <View>
                                <Image source={Images.defaultAvatar} style={style.img} />
                                    <H1 style={styles.title}>Get Started!</H1>
                                </View>
                            </View>
                            <View>
                            <Field
                                    label="Email"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                    onSubmitEditing={this.goToPassword}
                                    inverse
                                />
                                <Field
                                    label="Password"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    returnKeyType="go"
                                    textInputRef={this.setPasswordRef}
                                    onSubmitEditing={this.signIn}
                                    last
                                    inverse
                                />
                                <View>
                                    <View>
                                        <Button primary full onPress={this.signIn}>
                                            <Text>Sign In</Text>
                                        </Button>
                                    </View>
                                    <View>
                                        <Button primary full onPress={this.clearAsyncStorage}>
                                            <Text>clear</Text>
                                        </Button>
                                    </View>
                                    <View>
                                        <Button transparent full onPress={this.signUp}>
                                            <Small style={Styles.whiteText}>Don&apos;t have an account? Sign Up</Small>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </AnimatedView>
                    </Content>
                </SafeAreaView>
            </View>
        );
    }
}
const {height, width} = WindowDimensions;
const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        height,
        width
    },
    content: {
        flexGrow: 1
    },
    innerContent: {
        height: height - Constants.statusBarHeight,
        justifyContent: "flex-end"
    },
    logo: {
        marginVertical: variables.contentPadding * 1,
        alignItems: "center"
    },
    title: {
        marginVertical: variables.contentPadding * 2,
        color: "white",
        textAlign: "center"
    }
});
const style = StyleSheet.create({
    img: {
        width: 350,
        height: 80,
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

