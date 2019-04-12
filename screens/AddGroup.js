import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, AsyncStorage, Vibration, Alert} from 'react-native';
import t from 'tcomb-form-native';
import { Body } from 'native-base';
import { Actions } from 'react-native-router-flux';


const Form = t.form.Form;
/* formuliertje die je moet sturen naar user*/
const User = t.struct({
  groep: t.String,
});


const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: '#fff',
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
  handleSubmit = async() => {
    Vibration.vibrate(10);
    const apikey = await AsyncStorage.getItem("apikey");
    const gkey = await AsyncStorage.getItem("gkey");
    const value = this._form.getValue();
    /*const groepkey = await AsyncStorage.getItem("uid");*/
    console.log()
      fetch('https://api.mybizzmail.com/v1/group' , {
        method: 'POST',
        timeout:1000,
            headers: {
            Authorization : apikey,
            Accept: 'application/json',
                    'Content-Type': 'application/json',
          },
          body:JSON.stringify({
           
            account_id: "342576890",
            created_at: "32456",
            created_by: "4325768",
            id: null,
            name: value.groep,
          }),
          })
          .then(response => response.json())
            .then(response => { 
                console.log(response);
                if (response.status == "400"){
                    console.log("Post in groep");
                    alert("Deze Groep Bestaat al");
                }
                else async() => {
                    console.log("Groep maken")
                    const makegroupid = response.id;
                    AsyncStorage.setItem("makegroupid", makegroupid).then(
                        () => AsyncStorage.getItem("makegroupid")
                        .then((result)=>console.log(result)))
                }
              }

            )
         }          
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
          style={styles.froms}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {  
    padding: 20,
    flex: 1,
    backgroundColor: '#30343C' 
  },
  from: {
    backgroundColor: '#fff',
  }
});
const options = {
  fields: {
    email: {
      error: 'This field has to be filled!'
    },
  },
  stylesheet: formStyles,
};
