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
                screen: HomeScene,
                navigationOptions: {
                    title: "团购",
                    //headerTitle: "aaaa",
                    tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                        // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                        <AntDesign
                            name= {'home'}
                            size= {25}
                            color= {tintColor}
                        />
                    )
                }
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: {
                title: "附近",
                tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                    // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                    <SimpleLineIcons
                        name={'location-pin'}
                        size={25}
                        color={tintColor}
                    />
                )
            }
        },
        Order: {
            screen: OrderScene,
            navigationOptions: {
                title: "订单",
                tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
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
                )
            }
        },
        Mine: {
            screen: MineScene,
            navigationOptions: {
                title: "我的",
                tabBarIcon: ({tintColor}) => ( // tabBar显示的图标
                    // 这里使用了react-native-vector-icons, 不熟悉的请看上方连接
                    //<EvilIcons/>
                    <AntDesign name= {'user'} size= {25} color= {tintColor}/>
                )
            }
        },
    }, {

        headerMode: 'none',
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
