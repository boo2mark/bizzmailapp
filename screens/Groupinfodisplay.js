import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, AsyncStorage, FlatList, Vibration } from 'react-native';
import { Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
    state = {
      data: [],
      relation: []
    };

  componentWillMount() {
    this. groupinfo1();
  }
  veder = async(id) =>{
    console.log("well this doesnt work yet");
  }
  groupinfo1 = async() => {
    const apikey = await AsyncStorage.getItem("apikey");
    const id = await AsyncStorage.getItem("groepids");
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
                const idd = response.name;
                const relation = response.relation_count;
                const name = idd.toString();
                this.setState({ groupname: idd});
                this.setState({ relation: relation});
                console.log(name);
                 });
                 fetch("https://api.mybizzmail.com/v1/relation/?group=" + id ,  {
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
                  console.log(this.state.data)
                  
                })
     };
userpage = async(email) =>  {
  Vibration.vibrate(10);
    const apikey = await AsyncStorage.getItem("apikey");
    console.log(apikey);
   await  AsyncStorage.setItem("useremail", email).then(
    () => AsyncStorage.getItem("useremail")
          .then((result)=>console.log(result)))
    Actions.userpage();
}
  render() {
    return (
      <View style={styles.container} data={this.state.data}>
        <Text>Group Name = {this.state.groupname}</Text>
        <FlatList
        data={this.state.data}
          renderItem={({item}) =>
          <Button
          title={item.email}
          onPress={this.userpage.bind(this, item.email)}
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
    padding: 20,
    flex: 1,
    backgroundColor: '#30343C' 
  },
});

