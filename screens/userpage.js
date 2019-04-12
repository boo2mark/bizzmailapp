import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, AsyncStorage, FlatList } from 'react-native';
import { Body } from 'native-base';
import { ListItem } from 'react-native-elements';


export default class App extends Component {
    state = {
      data: [],
      relation: []
    };

  componentWillMount() {
    this. groupinfo();
    this.renderUser();
  }
  renderUser(){
    const list = [
      {
        name: this.state.emails,
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Test 123456789'
      },
    ]
    return(
      <View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
      />
    ))
  }
</View>
    )
  }
  veder = async(id) =>{
    console.log(Koekjes);
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
                  this.setState({ names: names});
                  const emails = this.state.data.map(value => value.email);
                  this.setState({ emails: emails});
                  
                })
                this.renderUser();
     };
console(){
  console.log("je bent echt en down!!!!!!")
}
  render() {
    return (
      <View style={styles.container} data={this.state.data}>
        <Text>email= {this.state.emails}</Text>
        <Text>firstname= {this.state.names}</Text>
        <View>
  {
  
  }
</View>
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

