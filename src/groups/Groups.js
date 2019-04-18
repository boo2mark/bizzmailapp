// @flow

    // @flow
    import * as React from "react";
    import { FlatList,Dimensions, Image, StyleSheet, View, AsyncStorage, Alert, Vibration } from "react-native";
    import { Actions } from 'react-native-router-flux';
    import {H1, H3, Button, Title, Text, } from "native-base";

    import {BaseContainer, Images, Small, WindowDimensions, Field, Styles} from "../components";
    import type {ScreenProps} from "../components/Types";
    import {AnimatedView} from "../components/Animations";
    import variables from "../../native-base-theme/variables/commonColor";

    export default class Groups extends React.PureComponent<ScreenProps<>> {
      state = {
        data: [],

      };
            
    
      componentWillMount() {
        this.fetchData();
      }
      componentDidUpdate(){
        /*this.fetchData();*/
      }
      fetchData = async() => {
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/', {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                  console.log(response);
                 const id = response.items;
                 this.setState({ data: id});
                  return (
                    {response}         
                  );
                  });
      };
      
      render()  : React.Node {
        const {navigation} = this.props;
        return (
            <BaseContainer title="Groups" navigation={this.props.navigation} scrollable>
            <FlatList
              data={this.state.data}
              renderItem={({item}) =>
                <Group title={item.name} description={item.relation_count} picture={Images.architecture} id={item.id} />
              }
                keyExtractor={(item, index) => index.toString()}

            />
      </BaseContainer>
        );
      }
    }
    type GroupProps = {
        title: string,
        description: string,
        picture: string,
        id: string,
    };
    class Group extends React.PureComponent<GroupProps> {
       
        render(): React.Node {
            const {navigation} = this.props;
            const {title, description, picture, id} = this.props;
            return (
                <View style={style.container}>
                    <Image source={picture} resizeMode="cover" style={style.img} />
                    <H3>{title}</H3>
                    <Small style={style.text}>Relation Count : {description}</Small>
                    <Button primary full onPress={this.veder.bind(this, id)}>
                        <Text>Go To {title}</Text>
                    </Button>
                </View>
            );
        }
    	veder = async(id) =>  {
            Vibration.vibrate(10);
            
            const apikey = await AsyncStorage.getItem("apikey");
            console.log(apikey);
            console.log(id);
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
                 const groupd = response.id;
                 this.setState({groupid : groupd})
                this.Postuser();
          
        });
        Actions.useringroup()
      }
              
          Postuser = async() =>{
            const id = this.state.groupid;
            await AsyncStorage.setItem("groupids", id).then(
              () => AsyncStorage.getItem("groupids")
                    .then((result)=>console.log(result)))
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
    
    
    
