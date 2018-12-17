import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

import HomeScene from "./scene/Home/HomeScene";
import NearbyScene from "./scene/Nearby/NearbyScene";
import OrderScene from "./scene/Order/OrderScene";
import MineScene from "./scene/Mine/MineScene";
import RootScene from "./RootScene";
import Colors from "./Colors";
import React from "react";

const AppNavigator1 = createStackNavigator({
    Index: {
        screen: RootScene,
        navigationOptions:{
            header: null,
            //title:'首页',
            headerTitleStyle:{flex: 1,textAlign:'center'}
        },
    },
    Home: {
        screen: HomeScene,
    },
    Nearby: {
        screen: NearbyScene,
    },
    Order: {
        screen: OrderScene,
    },
    Mine: {
        screen: MineScene,
    },
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

const Rooter = createAppContainer(AppNavigator1);
//const RootStack = createAppContainer(AppNavigator);

export default Rooter;