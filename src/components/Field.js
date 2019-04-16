// @flow
import * as _ from "lodash";
import * as React from "react";
import {StyleSheet, AsyncStorage,} from "react-native";
import type TextInput from "native-base";
import {ListItem, Item, Label, Input, Body, Right} from "native-base";

type FieldProps = {
    label: string,
    defaultValue?: string,
    last?: boolean,
    inverse?: boolean,
    right?: () => React.Node,
    textInputRef?: TextInput => void,
    children?: React.Node
};

type FieldState = {
    value: string
};

export default class Field extends React.Component<FieldProps, FieldState> {

    state = {
        value: "",
        Email : "",
        Password : "",
        UserEmail: "",
        UserName: "",
        UserCompany: "",
        UserPhoneNumber: "",
        Search: "",
    };

    componentDidMount() {
        this.setValue(this.props.defaultValue || "");
    }
    setValue = (label, value: string) => this.setState({ value }, this.setUser.bind(this, label, value))
    componentWillUpdate(){
        this.setUsers();
    }
    setUsers(label, value){
        this.setUser.bind(this, label, value)
    }
    setUser = (label, value) => {
        this.setState({label : value })
        const value1 = (label + " " + value)
        if (value1 == "Email" + " " + value){
            const email = value.toString();
            AsyncStorage.setItem("Email", email).then(
                () => AsyncStorage.getItem("Email")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "Password" + " " + value){
            const password = value.toString()
            this.setState({Password : password});
            AsyncStorage.setItem("Password", password).then(
                () => AsyncStorage.getItem("Password")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "UserEmail *" + " " + value){
            console.log(value)
            const UserEmail = value.toString()
            AsyncStorage.setItem("UserEmail", UserEmail).then(
                () => AsyncStorage.getItem("UserEmail")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "Firstname *" + " " + value){
            console.log(value)
            const UserName= value.toString();
            AsyncStorage.setItem("Firstname", UserName).then(
                () => AsyncStorage.getItem("Firstname")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "Company" + " " + value){
            console.log(value)
            const UserCompany = value.toString()
            AsyncStorage.setItem("UserCompany", UserCompany).then(
                () => AsyncStorage.getItem("UserCompany")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "Phone Number" + " " + value){
            
            const UserPhoneNumber = value.toString()
            this.setState({UserPhoneNumber : UserPhoneNumber});
            AsyncStorage.setItem("UserPhoneNumber", this.state.UserPhoneNumber).then(
                () => AsyncStorage.getItem("UserPhoneNumber")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "Note" + " " + value){
            const note = value;
            AsyncStorage.setItem("Note", note).then(
                () => AsyncStorage.getItem("Note")
                      .then((result)=>console.log(result)))
        }
        if (value1 == "Search" + " " + value){
            const search = value;
            AsyncStorage.setItem("Search", search).then(
                () => AsyncStorage.getItem("Search")
                      .then((result)=>console.log(result)))
        }

    }
   

        

    render(): React.Node {
        const {label, last, inverse, defaultValue, right, textInputRef, children} = this.props;
        const {value} = this.state;
        const style = inverse ? { color: "white" } : {};
        const itemStyle = inverse ? { borderColor: "white" } : {};
        const keysToFilter = ["right", "defaultValue", "inverse", "label", "last"];
        const props = _.pickBy(this.props, (v, key) => keysToFilter.indexOf(key) === -1);
        if (React.Children.count(children) > 0) {
            return (
                <ListItem {...{ last }} style={itemStyle}>
                    <Body>
                        <Item
                            style={styles.field}
                            floatingLabel={false}
                            stackedLabel={false}
                        >
                            <Label {...{ style }}>{label}</Label>
                            {children}
                        </Item>
                    </Body>
                    {
                        right && <Right>{right()}</Right>
                    }
                </ListItem>
            );
        }
        return (
            <ListItem {...{ last }} style={itemStyle}>
                <Body>
                    <Item
                        style={styles.field}
                        floatingLabel={!defaultValue}
                        stackedLabel={!!defaultValue}
                    >
                        <Label {...{ style }}>{label}</Label>
                        <Input onChangeText={this.setValue.bind(this, label)} getRef={textInputRef} {...{ value, style }} {...props} />
                    </Item>
                </Body>
                {
                    right && <Right>{right()}</Right>
                }
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    field: { borderBottomWidth: 0 ,
    }
});

setValue = (label, value: string) => {
    this.setState({label : value })
    const value1 = (label + " " + value)
    console.log(value1)
    if (value1 == "Email" + " " + value){
        console.log("Email console")
    }
    else{
        console.log("Error 404 cant find user")
    }
    if (value1 == "Password" + " " + value){
        console.log("Password console")
    }
    else{
        console.log("Error 404 cant find Password")
    }
}
