import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './screens/Login';
import Login1 from './screens/Login';
import LoginHome from './screens/HomeScreenLogged';
import Adduser from './screens/PostUser';
import Groupinfo from './screens/Groupinfodisplay';
import GroupSelect from './screens/GroupSelect';
import Register from './screens/Register';
import Scancard from './screens/Scancard';
import qrscanner from './screens/QrScanner';
import userpage from './screens/userpage';
import cardScanner from './screens/cardScanner';

const Routes = () => (
   
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" hideNavBar={false} showTabBar = {true} initial = {true} fullScreen={true}/>
         <Scene key = "adduser" component = {Adduser} title = "Info Sturen" hideNavBar={false} showTabBar = {false} />
         <Scene key = "groupinfo" component = {Groupinfo} title = "Group info" hideNavBar={false} showTabBar = {true} />
         <Scene key = "loginHome" component = {LoginHome} title = "loginHome" hideNavBar={true} showTabBar = {false}  />
         <Scene key = "loginHome" component = {LoginHome} title = "loginHome" hideNavBar={true} showTabBar = {false}  />
         <Scene key = "register" component = {Register} title = "register" hideNavBar={false} showTabBar = {true}  />
         <Scene key = "groupselect" component = {GroupSelect} title = "groupselect" hideNavBar={false} showTabBar = {true}/>
         <Scene key = "scancard" component = {Scancard} title = "scancard" hideNavBar={false} showTabBar = {true}/>
         <Scene key = "login1" component = {Login1} title = "Login" hideNavBar={true} showTabBar = {true}/>
         <Scene key = "qrscanner" component = {qrscanner} title = "qrscanner" hideNavBar={false} showTabBar = {true}/>
         <Scene key = "userpage" component = {userpage} title = "userpage" hideNavBar={false} showTabBar = {true}/>
         <Scene key = "cardScanner" component = {cardScanner} title = "carScanner" hideNavBar={false} showTabBar = {true}/>
      </Scene>
   </Router>
)


export default Routes