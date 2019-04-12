
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
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Reducer } from 'react-native-router-flux';

module.exports = StyleSheet.create({

alwaysred: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
},
Card: {
    flex: 1,
    backgroundColor: '#394247',
    margin:10,
    /*marginBottom: 100,*/
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 6,
    height: 250,
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
  Card2:{
    backgroundColor: '#394247'
  },
  button: {
      width: 15,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#30343C',
    flex: 1,
  },
  getStartedText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
  },
  headertext: {
    color: '#fff',
    fontSize: 35,
    marginTop: 6,
    alignItems: 'center',
    paddingVertical: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#30343C',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 1300,
    height: 50,
    resizeMode: 'contain',
    marginTop: 2,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 21,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  inlog: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  register: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        color: '#30343C',
        backgroundColor: '#30343C',
      },
      android: {
        elevation: 20,
        color: '#30343C',
        backgroundColor: '#30343C',
      },
    }),
    alignItems: 'center',
    backgroundColor: '#30343C',
    paddingVertical: 20,
    color: '#30343C',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#30343C',
  },
  Button: {
    color: "#069CE4",
    width: 100,
    height: 8000,
  },
  headertext: {
    fontSize: 20,
  },
  circle: {
    width: 125,
    height: 125,
    borderRadius: 100/2,
    backgroundColor: '#0F99D6',
    
},
circle1: {
    width: 125,
    height: 125,
    borderRadius: 100/2,
    backgroundColor: '#0F99D6', 
},
circle2: {
    width: 125,
    height: 125,
    borderRadius: 100/2,
    backgroundColor: '#394247', 
    shadowColor: '#30343C',
},
view: {
    flex: 1, 
    flexDirection: 'row',
},
view2: {
    flex: 1, 
    flexDirection: 'row',
},
smalltext: {
  flex: 1,
  color: '#fff',
  fontSize: 14,

}
});