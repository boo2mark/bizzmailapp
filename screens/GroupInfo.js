import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, AsyncStorage, Button, Alert, Vibration } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class App extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }


  veder = async(id) =>  {
    Vibration.vibrate(10);
    const apikey = await AsyncStorage.getItem("apikey");
    console.log(apikey);
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
        AsyncStorage.setItem("groepids", groepd).then(
          () => AsyncStorage.getItem("groepids")
                .then((result)=>console.log(result)))
  
});
      Alert.alert('GroepSelectie',

      'Weet je zeker dat je naar wilt gaan',
      [
        {text: 'Ja ik weet het zeker',
        onPress: () =>Actions.groupinfo()},
        {
          text: 'Nee.',
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
            title={item.name + item.relation_count}
            onPress={this.veder.bind(this, item.id)}
            style={styles.flatlist}
            />
          }
            keyExtractor={(item, index) => index.toString()}
            
        />
        </View>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30343C",
  },
  flatlist: {
    color: '#30343C',
    marginTop: 120,
  }
});