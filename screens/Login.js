import React, { Component } from 'react';
import { View, StyleSheet, Button, AsyncStorage, Alert, Redirect, Vibration,} from 'react-native';
import { navigation, Navigation} from 'react-native-navigation';
import { createStackNavigator, createAppContainer, StackNavigator,TabNavigator, DrawerNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';
import { Tooltip, Text } from 'react-native-elements';


const Form = t.form.Form;
/* formuliertje die je moet sturen naar user*/
const User = t.struct({
  email: t.String,
  password: t.String,

});
const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      color: 'white',
    },
  },

  controlLabel: {
    normal: {
      color: 'white',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    /* Error style die komt als er een error in de form komt*/
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

export default class App extends Component {
 /* componentWillMount() {
    this. fetch();
  }
  fetch = async()=>{
    const email = await AsyncStorage.getItem("email");
    const password = await AsyncStorage.getItem("password");
    if(email ==! null,password ==! null){
      console.log("wel go f yourself");
    }
    else{
      Actions.loginHome();
    }
  }*/
  handleSubmit = async(event) => {
    Vibration.vibrate(10);
    const value = this._form.getValue();
    if (value ==! null){
      alert("You have to fill out this form to login");
    }
    else{
    
    /* hier begint de Login Sequence*/
    const navigation = this.props.navigation;
    /* dit event zorgt ervoor dat de page niet refreshed*/
    event.preventDefault();
    /* hier krijgt hij het formulier data*/
    const value = this._form.getValue();
    console.log('value: ', value);
    /* hier post hij de data naar de API*/
    fetch('https://api.mybizzmail.com/v1/login', {
      method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          /* deze inlog gegevens zijn nu gehardcoded omdat we ze dan niet de hele tijd hoeven in te vullen verander met value.email en value.password*/
         'email': "teamrickrom@gmail.com",
          'password': "Programmeur12",

          /*'email' : value.email,
          'password' : value.password,*/
        }),
      })  
      .then(response => response.json())

      .then(response => {
          /* hier haalt hij de token op uit de gegevens die hij binnen krijgt*/
         const tokenn = response.token;
         console.log(tokenn); 
            if (tokenn !== null) {    
            }
            fetch('https://api.mybizzmail.com/v1/user/get', {
              method: 'GET',
              timeout:1000,
              params:  {
                  'token': tokenn,
                },
                  headers: {
                    Authorization: 'cGMxeG4xNHY1a29xZjFoZWRsbzE2YWVxYmVxcnBiMWg='
                },
                })
                .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    const firstnamekey = response.relation.firstname;
                    console.log(firstnamekey);
                    this.setState({firstkey : firstnamekey})
                    const apikeys = response.api_key;
                    this.setState({apikey : apikeys})
                  this.postasync();                  
            });          
            this.checkuser();
            this.loggeduser();      
          }
      )}}
  loggeduser = async() =>{
    const userlogged = "logged"
    await AsyncStorage.setItem("userlogged", userlogged )
    console.log(userlogged);
  };
  checkuser = async() =>{
    const userlogg = await AsyncStorage.getItem("userlogged");
    if (userlogg == "logged"){
      Actions.loginHome();
    }
    else{
      const apikey = await AsyncStorage.getItem("apikey");  
      const username = await AsyncStorage.getItem("firstkey");
      console.log(username);   
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
          })
          
         
    }).then(response => response.json())
          .then(response => {
            console.log(response);
            const usergroup = response.id.toString();
            this.setState({usergroups : usergroup})
            this.usergroups();
      this.addgroup();         
        })
    }
  }
  usergroups = async() =>{
    const usergroup = this.state.usergroups;
    await AsyncStorage.setItem("usergroup", usergroup).then(
      () => AsyncStorage.getItem("usergroup"))
      .then((result)=>console.log(result))
  }
  addgroup = async() =>{
    const dgroup = "8";
    await AsyncStorage.setItem("groepid", dgroup);
    this.loggeduser();  
    Actions.loginHome();
  }
  postasync = async() =>{
    const firstkey = this.state.firstkey;
    await AsyncStorage.setItem("firstkey", firstkey).then(
     () => AsyncStorage.getItem("firstkey")
     .then((result)=>console.log(result)))
    const apikey = this.state.apikey;
   await AsyncStorage.setItem("apikey", apikey).then(
     () => AsyncStorage.getItem("apikey"))
  }
  register(){
    Actions.register();
  }   
  logclear = async() =>{
    const userlogged = "logge"
    await AsyncStorage.setItem("userlogged", userlogged )
    console.log(userlogged);
  }       
   /* dit is de pagina*/           
  render() {
    return (
      
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
          style={{color: 'white'}}
        />
        <Button style={styles.button}
          title="Sign In!"
          onPress={this.handleSubmit}
        />
        <Text></Text>
        <Button style={styles.button}
          title="Sign Up!"
          onPress={this.register}
        />
      </View>
    );
  }
}
/* dit zijn de styles voor de pagina*/
const styles = StyleSheet.create({
  container: {  
    padding: 20,
    flex: 1,
    backgroundColor: '#30343C',
    color: '#fff',
  },
  form: {
    color: '#fff',
  },
  button: {
    marginTop: 500,
  }
});
const options = {
  fields: {
    email: {
      error: 'You have to give a Email!',
      color: 'white',
    },
    password: {
      error: 'You have to give a Password!',
      color: 'white',
    },

  },
  stylesheet: formStyles,
};
