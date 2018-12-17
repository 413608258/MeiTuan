import {createStackNavigator,createAppContainer} from 'react-navigation';

import HomeScene from "./scene/Home/HomeScene";
import NearbyScene from "./scene/Nearby/NearbyScene";
import OrderScene from "./scene/Order/OrderScene";
import MineScene from "./scene/Mine/MineScene";
import RootScene from "./RootScene";

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
    //initialRouteName:'Index',
    /* 主屏幕的标题配置现在在这里 */
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
    },
});

const Rooter = createAppContainer(AppNavigator1);
//const RootStack = createAppContainer(AppNavigator);

export default Rooter;