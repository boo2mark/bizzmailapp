// @flow
import moment from "moment";
import * as React from "react";
import {StyleSheet, View,  AsyncStorage, TouchableHighlight,} from "react-native";
import {H3, H2, H1, Text, Button, Icon, Header, Left, Title, Body, Right} from "native-base";
import {BaseContainer, Task, RecentGroup, Styles} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";
import { Actions } from "react-native-router-flux";

export default class Home extends React.Component<ScreenProps<>> {
    state = {
        data: [],
        names: [],
        relation: [],
      }; 
componentWillMount(){
    this.groupinfo();
    this.forceUpdate();
    this.Getgroup1();
    this.Getgroup2();
    this.Getgroup3();
}
Getgroup1 = async() =>{
    const SelectedGroup = await AsyncStorage.getItem("groupids1");
    console.log(SelectedGroup)
    const apikey = await AsyncStorage.getItem("apikey");
    fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
        method: 'GET',
        timeout:1000,
            headers: {
              Authorization: apikey
          },
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
             const name = response.name;
             this.setState({selectedgroup1 : name});
             const relations = response.relation_count;
             this.setState({ relation1: relations});
             const id = response.id;
             this.setState({Selectedgroupid1 : id})
              return (
                {response}         
              );
              });
              if(this.state.selectedgroup1 == null){
                this.setState({slectedgroup3 : "No First Group Selected!!!" })

            }
  
    
}
Getgroup2 = async() =>{
    const SelectedGroup = await AsyncStorage.getItem("groupids2");
    const apikey = await AsyncStorage.getItem("apikey");
    fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
        method: 'GET',
        timeout:1000,
            headers: {
              Authorization: apikey
          },
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
             const name = response.name;
             this.setState({selectedgroup2 : name});
             const id = response.id;
             this.setState({Selectedgroupid2 : id})
             const relations = response.relation_count;
             this.setState({ relation2: relations});
              return (
                {response}         
              );
              });
              if(this.state.selectedgroup3 == null){
                this.setState({slectedgroup3 : "No Second Group Selected!!!" })

            }
  
    
}
Getgroup3 = async() =>{
    const SelectedGroup = await AsyncStorage.getItem("groupids3");
    const apikey = await AsyncStorage.getItem("apikey");
    fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
        method: 'GET',
        timeout:1000,
            headers: {
              Authorization: apikey
          },
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
             const name = response.name;
             this.setState({selectedgroup3 : name});
             const relations = response.relation_count;
             this.setState({ relation3: relations});
             const id = response.id;
             this.setState({Selectedgroupid3 : id})
              return (
                {response}         
              );
              });
              if(this.state.selectedgroup3 == null){
                  this.setState({slectedgroup2 : "No third Group Selected!!!" })

              }


  
    
}
    go(key: string) {
        this.props.navigation.navigate(key);
    }
    /*recent Group Display*/
    groupinfo = async() =>{
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
                console.log(response.name);
               
                const name = response.name;
                this.setState({ data: name}); 
                const relations = response.relation_count;
                this.setState({ relation: relations});
                 })
  }
  
  
    render() : React.Node {      
        const today = moment();
        const date = today.format("MMMM D");
        const dayOfWeek = "";
        const {navigation} = this.props;
        return (
            <BaseContainer title={dayOfWeek} {...{ navigation }} scrollable>
               
                
               
               <View style={style.section}>  
                <H1>Primary Selected Group</H1>
                    <H2>{this.state.data}</H2>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                <View><H3 style={style.relationtitle}>RelationCount: </H3></View>
                <View><Text style={style.relation}>{this.state.relation}</Text></View>
            </View>
            </View>
                <View style={style.itemContainer}>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name={this.state.selectedgroup1} icon={this.state.relation1} left/>
                        <DrawerItem {...{navigation}} name={this.state.selectedgroup2} icon={this.state.relation2} left/>
                    </View>
                    <View style={style.row}>
                    <DrawerItem {...{navigation}} name={this.state.selectedgroup3} icon={this.state.relation3} left/>
                    </View>
                </View>
            </BaseContainer>
        );
    }
}
class DrawerItem extends React.PureComponent<DrawerItemProps> {
    componentWillMount(){
        this.Getgroup1();
        this.Getgroup2();
        this.Getgroup3();
    }
    state = {
        data: [],
        names: [],
        relation: [],
      }; 

    Getgroup1 = async() =>{
        const SelectedGroup = await AsyncStorage.getItem("groupids1");
        console.log(SelectedGroup)
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                  console.log(response);
                 const name = response.name;
                 this.setState({selectedgroup1 : name});
                 const relations = response.relation_count;
                 this.setState({ relation1: relations});
                 const id = response.id;
                 this.setState({Selectedgroupid1 : id})
                  return (
                    {response}         
                  );
                  });
                  if(this.state.selectedgroup1 == null){
                    this.setState({slectedgroup3 : "No First Group Selected!!!" })
    
                }
      
        
    }
    Getgroup2 = async() =>{
        const SelectedGroup = await AsyncStorage.getItem("groupids2");
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                  console.log(response);
                 const name = response.name;
                 this.setState({selectedgroup2 : name});
                 const id = response.id;
                 this.setState({Selectedgroupid2 : id})
                 const relations = response.relation_count;
                 this.setState({ relation2: relations});
                  return (
                    {response}         
                  );
                  });
                  if(this.state.selectedgroup3 == null){
                    this.setState({slectedgroup3 : "No Second Group Selected!!!" })
    
                }
      
        
    }
    Getgroup3 = async() =>{
        const SelectedGroup = await AsyncStorage.getItem("groupids3");
        const apikey = await AsyncStorage.getItem("apikey");
        fetch('https://api.mybizzmail.com/v1/group/' + SelectedGroup, {
            method: 'GET',
            timeout:1000,
                headers: {
                  Authorization: apikey
              },
              })
              .then(response => response.json())
              .then(response => {
                  console.log(response);
                 const name = response.name;
                 this.setState({selectedgroup3 : name});
                 const relations = response.relation_count;
                 this.setState({ relation3: relations});
                 const id = response.id;
                 this.setState({Selectedgroupid3 : id})
                  return (
                    {response}         
                  );
                  });
                  if(this.state.selectedgroup3 == null){
                      this.setState({slectedgroup2 : "No third Group Selected!!!" })
    
                  }
    }
    
    goToGroup1(){
        Actions.useringroup1()
    }
    goToGroup2(){
      Actions.useringroup2()
    }
    goToGroup3(){
      Actions.useringroup3()
    }
    render(): React.Node {
        const {name, icon, left} = this.props;
        const props = {
            onPress: () =>this.checkname(name) + this.forceUpdate(),
            style: [style.item, left ? { borderRightWidth: variables.borderWidth } : undefined]
        };
        return (
            <TouchableHighlight {...props} underlayColor="rgba(255, 255, 255, .2)">
                <View style={[Styles.center, Styles.flexGrow]}>
                <Text style={{ fontSize: 70 }}>{icon}</Text >
                    <Text style={{ marginTop: variables.contentPadding ,fontSize: 15 }}>{name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    checkname(name){
      console.log(name)
      const groupids1 = this.state.selectedgroup1;
      const groupids2 = this.state.selectedgroup2;
      const groupids3 = this.state.selectedgroup3;
      if(name == groupids1){
        this.goToGroup1()
      }
      if(name == groupids2){
        this.goToGroup2()
      }
      if(name == groupids3){
        this.goToGroup3()
      }
    }

}
const style = StyleSheet.create({
    section: {
        padding: variables.contentPadding * 2,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    relationtitle: {
        left: 0,
    },
    relation: {
        marginLeft: 100,
        fontSize: 60,
        right: 10,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        borderColor: variables.listBorderColor,
        borderBottomWidth: variables.borderWidth
    },
    itemContainer: {
        flex: 1,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        height: 300,
        borderColor: variables.listBorderColor
    },
});

 /*<Task
                    date="2019-03-25 11:20"
                    title={this.state.data}
                    subtitle={this.state.relation}
                    completed
                />*/