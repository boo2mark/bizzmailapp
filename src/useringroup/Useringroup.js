// @flow
import moment from "moment";
import * as React from "react";
import { FlatList, Dimensions, Image, StyleSheet,View, AsyncStorage,  Alert, Vibration } from "react-native";
import {H3, H1, Button, Text, } from "native-base";
import {BaseContainer, Images, Small, WindowDimensions, Field, Styles} from "../components";
import type {ScreenProps} from "../components/Types";
import { Actions } from 'react-native-router-flux';
import variables from "../../native-base-theme/variables/commonColor";

export default class Home extends React.Component<ScreenProps<>> {
  state = {
    data: []
  };
  componentWillMount() {
    this. groupinfo1();
  }
  
  groupinfo1 = async() => {
    const apikey = await AsyncStorage.getItem("apikey");
    const id = await AsyncStorage.getItem("groupids");
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

render()  : React.Node {
  const {navigation} = this.props;
  return (
      <BaseContainer title="Groups" navigation={this.props.navigation} scrollable>
      <FlatList
        data={this.state.data}
        renderItem={({item}) =>
          <Group title={item.email} buttonid={item.id} description={item.firstname} picture={Images.architecture} email={item.email} />
        }
          keyExtractor={(item, index) => index.toString()}

      />
</BaseContainer>
  );
}
}
type GroupProps = {
  title: string,
  description?: string,
  picture: string,
  email: string,
  buttonid : string,
};
class Group extends React.PureComponent<GroupProps> {
 
  render(): React.Node {
      const {navigation} = this.props;
      const {title, description, picture, email, buttonid} = this.props;
      return (
          <View style={style.container}>
              <Image source={picture} resizeMode="cover" style={style.img} />
              <H3>{title}</H3>
              <Small style={style.text}>Name : {description}</Small>
              <Button primary full onPress={this.userpage.bind(this, email)}>
                    <Text>Go To {title}</Text>
                </Button>
          </View>
      );
  }
  userpage = async(email) =>  {
    Vibration.vibrate(10);
      const apikey = await AsyncStorage.getItem("apikey");
      console.log(apikey);
     await  AsyncStorage.setItem("useremail", email).then(
      () => AsyncStorage.getItem("useremail")
            .then((result)=>console.log(result)))
      Actions.userprofile();
  }
}

const {width} = Dimensions.get("window");

const style= StyleSheet.create({
  next: {
      borderRadius: 0,
      borderLeftWidth: variables.borderWidth,
      marginLeft: variables.borderWidth,
      borderColor: "white"
  },
 container: {
      width,
      height: width * (402 / 750),
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  img: {
      ...StyleSheet.absoluteFillObject,
      width,
      height: width * (402 / 750)
  },
  text: {
      borderColor: "white",
      borderWidth: variables.borderWidth,
      padding: variables.contentPadding,
      margin: variables.contentPadding
  },
flatlist: {
  color: '#30343C',
  marginTop: 120,
}
});



