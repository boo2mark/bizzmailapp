import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  AsyncStorage,
  Picker,
  Component,
  FlatList,
  Alert

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import styles from './Style/style';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    
  };
  componentWillMount() {
   /*this.Groupmount();*/
   this.loadrecentgroup();
  }

postuser = async() =>{}

loadrecentgroup = async() =>{
 
}
qrscanner(){
 Alert.alert(
  'Alert',
  'The QR Scanner is Still in Development',
  [
    {
      text: 'Close Window',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },

  ],
  {cancelable: false},
);
 
}
cardscanner(){
  Alert.alert(
    'Alert',
    'The BuisnesscardScanner is Still in Development',
    [
      {
        text: 'Close Window',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  )
}
render(){
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headertext}>HomeScreen</Text>
        <View style={styles.Card}>
        <Text style={styles.getStartedText}>You can quick add relation with one of these options!</Text>
            <Text style={styles.getStartedText}></Text>
            <Button style={styles.button}
                title="Post New relation."
                onPress={this.postuser}
                />
            <Text style={styles.getStartedText}></Text>
            <Button style={styles.button}
                title="Scan New QR Relation."
                onPress={this.qrscanner}
                />
            <Text style={styles.getStartedText}></Text>
            <Button style={styles.button}
       title="Scan Buisness Card."
       onPress={this.cardscanner}
     />
        </View>
        </ScrollView>
      </View>
    );
  }
}
    

