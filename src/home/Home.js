// @flow
import moment from "moment";
import * as React from "react";
import {StyleSheet, View,  AsyncStorage,} from "react-native";
import {H3, H2, H1, Text, Button,} from "native-base";
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
  
  goToGroup1(){
      Actions.useringroup1()
  }
  goToGroup2(){
    Actions.useringroup2()
  }
  goToGroup3(){
    Actions.useringroup3()
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

                


                <View style={style.section}>
                    <H1>{this.state.selectedgroup1}</H1>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                <View><H3 style={style.relationtitle}>RelationCount: </H3></View>
                <View><Text style={style.relation}>{this.state.relation1}</Text></View>
      </View>
                    <Button primary full onPress={this.goToGroup1}>
                                            <Text>Go To {this.state.selectedgroup1}</Text>
                                        </Button>
                </View>
                <View style={style.section}>
                    <H1>{this.state.selectedgroup2}</H1>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                <View><H3 style={style.relationtitle}>RelationCount: </H3></View>
                <View><Text style={style.relation}>{this.state.relation2}</Text></View>
      </View>
                    
                    <Button primary full onPress={this.goToGroup2}>
                                            <Text>Go To {this.state.selectedgroup2}</Text>
                                        </Button>
                </View>
                <View style={style.section}>
                    <H1>{this.state.selectedgroup3}</H1>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                <View><H3 style={style.relationtitle}>RelationCount: </H3></View>
                <View><Text style={style.relation}>{this.state.relation3}</Text></View>
      </View>
                    <Button primary full onPress={this.goToGroup3}>
                                    <Text>Go To {this.state.selectedgroup3}</Text>
                    </Button>
                </View>

            </BaseContainer>
        );
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
    }
});

 /*<Task
                    date="2019-03-25 11:20"
                    title={this.state.data}
                    subtitle={this.state.relation}
                    completed
                />*/