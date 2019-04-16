// @flow
import * as React from "react";
import { StyleSheet, View, AsyncStorage, Image } from "react-native";
import { H1, Button, Text, Content } from "native-base";
import { BaseContainer, Avatar, Styles, Field } from "../components";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Dropdown } from 'react-native-material-dropdown';
import type { ScreenProps } from "../components/Types";
import {DrawerActions} from "react-navigation";
import variables from "../../native-base-theme/variables/commonColor";

export default class Create1 extends React.PureComponent<ScreenProps<>> {
  state = {
    id: "",
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  onPress = async () => {
    this.forceUpdate()
    const name = await AsyncStorage.getItem("Firstname");
    console.log("Hallo " + name)
    const email = await AsyncStorage.getItem("UserEmail")
    const company = await AsyncStorage.getItem("UserCompany")
    const phonenumber = await AsyncStorage.getItem("UserPhoneNumber")
    const apikey = await AsyncStorage.getItem("apikey");
    const usergroup = await AsyncStorage.getItem("groupids");
    const note = await AsyncStorage.getItem("Note");
    fetch('https://api.mybizzmail.com/v1/relation', {
      method: 'POST',
      headers: {
        Authorization: apikey,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'firstname': name,
        'phonenumber_mobile': phonenumber,
        'company_name': company,
        'note': note,
      }),
    }).then(response => response.json())

      .then(response => {
        fetch('https://api.mybizzmail.com/v1/relation/?email=' + email, {
          method: 'GET',
          timeout: 1000,
          params: {
            'email': email,
          },
          headers: {
            Authorization: apikey,
          },
        })

          .then(response => response.json())
          .then(response => {
            console.log(response);
            const iddd = response.items.map(value => value.id);
            const idd = iddd.toString();
            this.setState({ id: idd });
            AsyncStorage.setItem("userid", idd).then(
              () => AsyncStorage.getItem("userid")
                .then((result) => console.log(result)))
            /* terug post naar Bizzmail Api*/
            const idddd = this.state.id;
            fetch("https://api.mybizzmail.com/v1/group/add/" + usergroup, {
              method: 'POST',
              timeout: 2000,
              headers: {
                Authorization: apikey,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "relation": idd,
              }),
            }).then(response => {
              console.log("Test usergroup")
            }
            );
          })
      }
      )
    alert("A User has Been added.");
    this.forceUpdate()
    console.log("Hallo " + email)
  }
  render(): React.Node {
    let data = [{
      value: 'CEO',
    }, {
      value: 'Manager',
    }, {
      value: 'ICT',
    }, {
      value: 'Customer Support',
    }, {
      value: 'Sales',
    }
    ];
    return (
      <BaseContainer title="Add New" navigation={this.props.navigation} scrollable>
        <View style={style.text}>
          <Field label="UserEmail *" defaultValue="Relation Email" />
          <Field label="Firstname *" defaultValue="Firstname" />
          <Field label="Company" defaultValue="Company Optional" />
          <Field label="Phone Number" defaultValue="Phone Number Optional" />
          <Field label="Note" defaultValue="Note" />
          <Dropdown
            label='Job Title'
            data={data}
            onChangeText={this.onChangeText}
          />
          <AirbnbRating
            count={5}
            reviews={["Priority 1", "Priority 2", "Priority 3", "Priority 4", "Priority 5"]}
            defaultRating={1}
            size={40}
            onFinishRating={this.ratingCompleted}
            ratingColor='#3498db'
          />
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
  },
  text: {
    fontSize: 10,
    flex: 1,
  },
  foto: {
    alignItems: "center",
    width: 100,
    height: 100,
    flex: 1,
  }

});
