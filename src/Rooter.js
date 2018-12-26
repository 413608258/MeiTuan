import {createStackNavigator, createAppContainer, } from 'react-navigation';

import HomeScene from "./scene/Home/HomeScene";
import NearbyScene from "./scene/Nearby/NearbyScene";
import OrderScene from "./scene/Order/OrderScene";
import MineScene from "./scene/Mine/MineScene";
import RootScene from "./RootScene";
import React from "react";
import GroupPurchaseScene from "./scene/GroupPurchase/GroupPurchaseScene";
import WebScene from "./widget/WebScene";

const AppNavigator = createStackNavigator({
    Index: {
        screen: RootScene,
        navigationOptions:{
            header: null,
            //title:'首页',
            headerTitleStyle:{flex: 1,textAlign:'center'}
        },
    },
    GroupPurchase: {screen: GroupPurchaseScene},
    Web: {screen: WebScene},
    Home: {screen: HomeScene},
    Nearby: {screen: NearbyScene},
    Order: {screen: OrderScene},
    Mine: {screen: MineScene},
},{
    /*initialRouteName:'Index',
    /!* 主屏幕的标题配置现在在这里 *!/
    navigationOptions: {
        //header: null,
        gesturesEnabled: true,
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },*/
    navigationOptions:{
        header:null,
        gesturesEnabled: true
    },
    initialRouteName:'Index',
});

const Rooter = createAppContainer(AppNavigator);
export default Rooter;