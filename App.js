import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Start';
import UserinGroup from './Navigator/navigator.js'

import Signup from './src/sign-up/SignUp';
import Userprofile from './Navigator/navigator.1';
import Groupselect from './Navigator/navigator2.js';
import Settings from './Navigator/navigator3.js';
import Groupselect2 from './Navigator/navigator4.js';
import Groupselect3 from './Navigator/navigator5.js';
import Groupselect4 from './Navigator/navigator6.js'
/*import nothing from './navigator7.js';*/
import UserinGroup1 from './Navigator/navigator8'
import UserinGroup2 from './Navigator/navigator9'
import UserinGroup3 from './Navigator/navigator10'
import Form from './Navigator/navigator11.js';
import Scanner from './Navigator/navigator12.js';

/* This is A Extra Route this will change in one of the next patches*/
const Routes = () => (
   
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" hideNavBar={true} showTabBar = {false} initial = {true} fullScreen={true}/>
         <Scene key = "useringroup1" component = {UserinGroup1} title = "UserinGroup1" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "useringroup2" component = {UserinGroup2} title = "UserinGroup2" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "useringroup3" component = {UserinGroup3} title = "UserinGroup3" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "useringroup" component = {UserinGroup} title = "UserinGroup" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "signup" component = {Signup} title = "Signup" hideNavBar={false} showTabBar = {true}/>
         <Scene key = "userprofile" component = {Userprofile} title = "Userprofile" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "groupselect4" component = {Groupselect4} title = "Groupselect4" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "groupselect3" component = {Groupselect3} title = "Groupselect3" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "groupselect2" component = {Groupselect2} title = "Groupselect2" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "groupselect" component = {Groupselect} title = "Groupselect" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "setting" component = {Settings} title="Setting" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "form" component = {Form} title="Form" hideNavBar={true} showTabBar = {false}/>
         <Scene key = "scanner" component = {Scanner} title="Scanner" hideNavBar={true} showTabBar = {false}/>
      </Scene>
   </Router>
)


export default Routes