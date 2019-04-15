import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity,AsyncStorage, Image } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import {BaseContainer, TaskOverview, Images, Styles} from "../components";


export default class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  render() {
    return (
      <BaseContainer title={this.state.names} navigation={this.props.navigation} scrollable>
      <View style={styles.container}>
        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
               
                
              : <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._handlePressUrl()}

        <StatusBar hidden />
      </View>
      </BaseContainer>
    );
  }
_Getstring= async() =>{
  
  const string = this.state.lastScannedUrl.toString();

  var obj = string.split(',');
  const fname = obj[0];
  const lname = obj[1];
  const email = obj[2];
  console.log(fname, lname, email)

  const apikey = await AsyncStorage.getItem("apikey");
    const usergroup = await AsyncStorage.getItem("groupids");
    fetch('https://api.mybizzmail.com/v1/relation', {
      method: 'POST',
          headers: {
          Authorization : apikey,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email': email,
          'firstname': fname,
          'lastname': lname
        }),
      }).then(response => response.json())

      .then(response => {
        fetch('https://api.mybizzmail.com/v1/relation/?email=' +  email , {
            method: 'GET',
            timeout:1000,
            params:  {
                'email': email,
              },
                headers: {
                Authorization : apikey,
              },
              })
          
              .then(response => response.json())
                .then(response => {
                    console.log(response);
                   const iddd = response.items.map(value => value.id);
                   const idd = iddd.toString();
                   this.setState({id : idd});
                   AsyncStorage.setItem("userid", idd).then(
                    () => AsyncStorage.getItem("userid")
                          .then((result)=>console.log(result)))
                  /* terug post naar Bizzmail Api*/
                  const idddd = this.state.id;
                   fetch("https://api.mybizzmail.com/v1/group/add/" + usergroup,  {
                    method: 'POST',
                    timeout:2000,
                        headers: {
                        Authorization : apikey,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        "relation":  idd,
                      }),
                  }).then(response=> {
                      console.log("Test usergroup")
                  }
                 );
                })
                  }   
                )
                alert("A User has Been added.");
                this.setState({ lastScannedUrl: null });
  console.log(obj)
}

  _handlePressUrl = () => {
    if(this.state.lastScannedUrl == null){
     console.log("What a Easter Egg") 
    }
    else{
      this._newalert();
    }
};
  _newalert = () => {
    Alert.alert(
      'Add This User?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => this._Getstring()/*Linking.openURL(this.state.lastScannedUrl)*/,
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  }
  

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});
