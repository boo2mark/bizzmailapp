import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, AsyncStorage, Button, Alert, Vibration, } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class App extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }
  login() {
    Actions.login();
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <Button
            title={item.name}
            onPress={this.veder.bind(this, item.id)}
            
            />}
            keyExtractor={(item, index) => index.toString()}
            
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#30343C"
  }
});