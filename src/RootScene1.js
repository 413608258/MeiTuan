import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, View, Text, Image} from 'react-native';
import HomeScene from "./scene/Home/HomeScene";
import NearbyScene from "./scene/Nearby/NearbyScene";
import OrderScene from "./scene/Order/OrderScene";
import MineScene from "./scene/Mine/MineScene";
import Colors from "./Colors";

/**
 * @ClassName : RootScene
 * @Description :
 *
 * @author : Loushuai
 * @since : 2018-12-17
 **/

const Tab = createBottomTabNavigator(
    {
        团购: createStackNavigator(
            {
                screen: HomeScene,
                /*tabBarIcon: ({focused, tintColor})=>(
                    <Image source={ require('./img/tabbar/home_icon_home1.png') }/>
                ),*/
            },
            {
                headerMode:'screen',
                mode:Platform.OS === 'ios'?'modal':'card',
                navigationOptions:{
                    headerStyle:{
                        backgroundColor:'#ffffff',
                        height:44
                    },
                    title:'团购',
                    headerTintColor:'#3A3A3A',
                    headerTitleStyle:{
                        fontWeight:'normal',
                        flex: 1,
                        textAlign:'center',
                        fontSize:16
                    },
                }
            },
        ),
        附近: createStackNavigator(
            {
                screen: NearbyScene,
            },
            {
                headerMode:'screen',
                mode:Platform.OS === 'ios'?'modal':'card',
                navigationOptions:{
                    headerStyle:{
                        backgroundColor:'#6699ff',
                    },
                    title:'附近',
                    headerTintColor:'#ffffff',
                    headerTitleStyle:{
                        fontWeight:'normal',
                        flex: 1,
                        textAlign:'center'
                    },
                }
            }
        ),
        订单: createStackNavigator(
            {
                screen: OrderScene,
            },
            {
                headerMode:'screen',
                mode:Platform.OS === 'ios'?'modal':'card',
                navigationOptions:{
                    headerStyle:{
                        backgroundColor:'#6699ff',
                    },
                    title:'订单',
                    headerTintColor:'#ffffff',
                    headerTitleStyle:{
                        fontWeight:'normal',
                        flex: 1,
                        textAlign:'center'
                    },
                }
            }
        ),
        我的: createStackNavigator(
            {
                screen: MineScene,
            },
            {
                headerMode:'screen',
                mode:Platform.OS === 'ios'?'modal':'card',
                navigationOptions:{
                    headerStyle:{
                        backgroundColor:'#6699ff',
                    },
                    title:'我的',
                    headerTintColor:'#ffffff',
                    headerTitleStyle:{
                        fontWeight:'normal',
                        flex: 1,
                        textAlign:'center'
                    },
                }
            }
        ),
    },
    {
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor: Colors.active, // 选中时tab的label/icon的颜色
            inactiveTintColor: Colors.inactive, // 未选中的颜色

            showLabel: true,
            showIcon: true,
            //activeTintColor:'#FD5238',
            style:{
                backgroundColor:'#f8f8f8',
                //backgroundColor:'green',
            },
            indicatorStyle:{
                opacity:0
            },
            tabStyle:{
                padding:0,
                height:50,
            },
            labelStyle:{
                fontSize:12,
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === '团购') {
                    if(focused){
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_home1.png')} />;
                    } else {
                        return <Image  style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_home2.png')}/>;
                    }
                } else if(routeName === '附近') {
                    if(focused){
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_news1.png')}/>;
                    } else {
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_news2.png')}/>;
                    }

                } else if(routeName === '订单'){
                    if(focused){
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_news1.png')}/>;
                    } else{
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_news2.png')}/>;
                    }

                } else {
                    if(focused){
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_my1.png')}/>;
                    } else {
                        return <Image style={styles.tabBarIcon} source={ require('./img/tabbar/home_icon_my2.png')}/>;
                    }

                }
            },
        }),

    }
);
const styles = StyleSheet.create({
    tabBarIcon: {
        width:27,
        height:27,
    }
});
const RootScene1 = createAppContainer(Tab);
export default RootScene1;
