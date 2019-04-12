
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, WebView, Vibration,} from 'react-native';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <WebView
      source={{uri: 'https://mybizzmail.com/register/'}}
      style={{marginTop: 20}}
    />
    );
  }
}
const styles = StyleSheet.create({
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
    fontSize: 17,
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
    marginVertical: 7,
    marginTop: 13,
  }

});
