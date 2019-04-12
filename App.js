import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Start';
import UserinGroup from './navigator'
import UserinGroup1 from './navigator8'
import UserinGroup2 from './navigator9'
import UserinGroup3 from './navigator10'
import Signup from './src/sign-up/SignUp';
import Userprofile from './navigator.1';
import Groupselect from './navigator2.js';
import Groupselect2 from './navigator4.js';
import Groupselect3 from './navigator5.js';
import Groupselect4 from './navigator6.js';
import Settings from './navigator3.js';


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
      </Scene>
   </Router>
)


export default Routes