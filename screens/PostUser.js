// @flow
import * as React from "react";
import {StyleSheet, View, AsyncStorage,} from "react-native";
import {H1, Button, Text, Content} from "native-base";
import {BaseContainer, Avatar, Styles, Field} from "../components";
import type {ScreenProps} from "../components/Types";


import variables from "../../native-base-theme/variables/commonColor";

export default class PostUser extends React.PureComponent<ScreenProps<>> {
state = {
    id : "",
}
onPress = async() =>{
   const name = await AsyncStorage.getItem("Firstname");
   console.log("Hallo " + name)
    const email = await AsyncStorage.getItem("UserEmail")
    const company = await AsyncStorage.getItem("UserCompany")
    const phonenumber = await AsyncStorage.getItem("UserPhoneNumber")
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
          'firstname': name,
          'phonenumber_mobile': phonenumber,
          'company_name': company,
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

      this.forceUpdate()
      console.log("Hallo " + email)
}
    render(): React.Node {
        return (
            <BaseContainer title="Add New" navigation={this.props.navigation} scrollable>
                <View style={Styles.form}>
                    <Field label="UserEmail *" defaultValue="Relation Email" />
                    <Field label="Firstname *" defaultValue="Firstname" />
                    <Field label="Company" defaultValue="Company Optional" />
                    <Field label="Phone Number" defaultValue="Phone Number Optional" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                    <Text style={Styles.whiteText}>* Required</Text>
                    <Button primary full onPress={this.onPress}>
                        <Text>Post User</Text>
                    </Button>
                </View>
            </BaseContainer>
        );
    }
}

const style = StyleSheet.create({
    avatars: {
        flexDirection: "row"
    },
    avatar: {
        marginRight: variables.contentPadding
    }
});
