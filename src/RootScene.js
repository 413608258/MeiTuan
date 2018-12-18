import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, View, Text, Image} from 'react-native';
import HomeScene from "./scene/Home/HomeScene";
import NearbyScene from "./scene/Nearby/NearbyScene";
import OrderScene from "./scene/Order/OrderScene";
import MineScene from "./scene/Mine/MineScene";
import Colors from "./Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBarItem from "./scene/widget/TabBarItem";

/**
 * @ClassName : RootScene
 * @Description :
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

const Tab = createBottomTabNavigator(
    {
        Home: {
            //screen: HomeScene,
            screen: createStackNavigator({
                HomeScene: {
                    screen: HomeScene,
                    navigationOptions: {
                       //header: null,
                    }
                },
            }),
            navigationOptions: {
                title: "团购",
                tabBarLabel: "团购",
                /*tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                    // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                    <AntDesign
                        name= {'home'}
                        size= {25}
                        color= {tintColor}
                    />
                )*/
                tabBarIcon: ({focused, tintColor}) => ( // tabBar显示的图标
                    <TabBarItem
                        tintColor = {tintColor}
                        focused = {focused}
                        normalImage = {require('./img/tabbar/tabbar_homepage.png')}
                        selectedImage = {require('./img/tabbar/tabbar_homepage_selected.png')}
                    />
                )
            }
        },
        Nearby: {
            //screen: NearbyScene,
            screen: createStackNavigator({
                NearbyScene: {
                    screen: NearbyScene,
                    navigationOptions: {
                        //header: null,
                    }
                },
            }),
            navigationOptions: {
                title: "附近",
                tabBarLabel: "附近",
                /*tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                    // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                    <SimpleLineIcons
                        name={'location-pin'}
                        size={25}
                        color={tintColor}
                    />
                )*/
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_merchant.png')}
                        selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                    />
                )
            }
        },
        Order: {
            //screen: OrderScene,
            screen: createStackNavigator({
                OrderScene: {
                    screen: OrderScene,
                    navigationOptions: {
                        //header: null,
                    }
                },
            }),
            navigationOptions: {
                title: "订单",
                tabBarLabel: "订单",
                /*tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                    // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                    //<FontAwesome
                    //    name={'wpforms'}
                    //    size={30}
                    //    color={tintColor}
                    ///>
                    <AntDesign
                        name={'profile'}
                        size={25}
                        color={tintColor}
                    />
                )*/
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_order.png')}
                        selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                    />
                )
            }
        },
        Mine: {
            //screen: MineScene,
            screen: createStackNavigator({
                MineScene: {
                    screen: MineScene,
                    navigationOptions: {
                        //header: null,
                    }
                },
            }),
            navigationOptions: {
                title: "我的",
                tabBarLabel: "我的",
                /*tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                    // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                    //<EvilIcons/>
                    <AntDesign name= {'user'} size= {25} color= {tintColor}/>
                )*/
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_mine.png')}
                        selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
                    />
                )
            }
        },
    }, {
        initialRouteName: 'Home', // 设置默认的页面

        lazy: true, // 是否在app打开的时候将底部标签栏全部加载
        backBehavior: null, // 点击返回退到上级界面

        /*navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName ==='团购') {
                    return <AntDesign name= {'user'} size= {25} color= {tintColor}/>;
                }
            },
        }),*/

        tabBarOptions: {
            activeTintColor: Colors.active, // 选中时tab的label/icon的颜色
            inactiveTintColor: Colors.inactive, // 未选中的颜色

            showLabel: true,
            showIcon: true,
            style: { // 整体TabBar的样式
                backgroundColor: Colors.tabBar,
                height: 54,
            },
            tabStyle: { // TabBar内单独tab的样式
                height: 54,
            },
            labelStyle: { // TabBar内单独tab的文字样式
                fontSize: 12,
            },
        }
    }
);
const RootScene = createAppContainer(Tab);
export default RootScene;
