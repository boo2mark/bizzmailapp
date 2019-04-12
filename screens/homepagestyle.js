import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  AsyncStorage,
  Picker,
  Component

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    
  };
  
groupselect(){
  Actions.groupselect();
}
showgroup = async () => {
  console.log("hij is gesync hoor");
}
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headertext}>HomeScreen</Text>
        <View style={styles.Card}>
        <Text style={styles.getStartedText}>You can quick add relation with one of these options!</Text>
            <Text style={styles.getStartedText}></Text>
            <Button style={styles.button}
                title="Go To Post New relation."
                onPress={this.postuser}
                />
            <Text style={styles.getStartedText}></Text>
            <Button style={styles.button}
                title="Go to Scan New QR Relation."
                onPress={this.qrscanner}
                />
            <Text style={styles.getStartedText}></Text>
            <Button style={styles.button}
       title="Go To Scan Buisness Card."
       onPress={this.cardscanner}
     />
        </View>
        <View style={styles.Card1}>
        <Text style={styles.getStartedText}></Text>
            <Text style={styles.getStartedText}></Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  Card: {
    flex: 1,
    backgroundColor: '#394247',
    margin:10,
    /*marginBottom: 100,*/
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 6,
    height: 200,

  },
  Card1: {
    flex: 1,
    backgroundColor: '#394247',
    margin:10,
    /*marginBottom: 100,*/
    /*marginTop: 100,*/
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 6,
    height: 300,

  },
  container: {
    backgroundColor: '#30343C',
    flex: 1,
  },
  getStartedText: {
      color: '#fff',
      fontSize: 18,
  },
  headertext: {
    color: '#fff',
    fontSize: 35,
    marginTop: 6,
    alignItems: 'center',
    paddingVertical: 20,
  },
});
