import React, { Component } from 'react'; 
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, StatusBar, TextInput} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../common/Colors";
import {Heading3, Paragraph} from "../../widget/Text";
import NavigationItem from "../../widget/NavigationItem";
import Util from "../../common/Util";
import GroupPurchaseCell from "../GroupPurchase/GroupPurchaseCell";
import api from "../../api";
import HomeMenuView from "./HomeMenuView";
import SpacingView from "../../widget/SpacingView";
import HomeGridView from "./HomeGridView";
/**
 * @ClassName : HomeScene
 * @Description :
 *
 * @author : Loushuai
 * @since : 2018/12/14 10:05:13
 **/

/*type Props = {
    navigation: any,
}*/
class HomeScene extends Component {
    static navigationOptions = ()=>({
       headerTitle: (
           <TouchableOpacity style={styles.searchBar}>
               <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon}/>
               <Paragraph>一点点</Paragraph>
               {/*<TextInput style={{fontSize:10, color: '#777777'}} value='一点点'></TextInput>*/}
           </TouchableOpacity>
       ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                onPress={
                    ()=>{

                    }
                }
            />
        ),
        headerLeft: (
            <NavigationItem
                title={'杭州'}
                titleStyle={{color: 'white'}}
                onPress={
                    ()=>{

                    }
                }
            />
        ),
        headerStyle: {backgroundColor: Colors.primary},
    });
    /*static navigationOptions = {
        title: "HomeScene...",
    }*/
   /* static navigationOptions = ()=>{
        return {
            headerStyle: {backgroundColor: Colors.primary},
            headerTitle: (
                <TouchableOpacity>
                    <AntDesign
                        name= {'search1'}
                        size= {25}
                        color= {Colors.primary}
                    />
                    <Text>搜索</Text>
                </TouchableOpacity>
            ),
        }
    }*/
    /*static navigationOptions = ()=>({
        headerStyle: {backgroundColor: Colors.primary},
        headerTitle: (
            <TouchableOpacity>
                <AntDesign
                    name= {'search1'}
                    size= {25}
                    color= {'#FFFFFF'}
                />
                <Text>搜索</Text>
            </TouchableOpacity>
        ),
    })*/
    constructor(props){
        super(props);
        this.state = {
            title: "HomeScene",
            discounts: [],
            dataList: [],
            refreshing: false,
        };
    }
    componentDidMount(){
        this.requestData();
    }

    requestData = ()=>{
        this.setState({
            refreshing: true,
        });

        this.requestDiscount();
        this.requestRecommend();
    }

    requestRecommend = async () => {
        try {
            //var url = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';
            var url = api.recommend;
            //let response = await fetch(api.recommend)
            let response = await fetch(url);
            let json = await response.json();

            let dataList = json.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            this.setState({refreshing: false})
        }
    }

    requestDiscount = async ()=>{
        try {
            //var url = 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';
            var url = api.discount;
            //let response = await fetch(api.discount);
            let response = await fetch(url);
            let json = await response.json();

            console.log("discounts: " + JSON.stringify(json));

            this.setState({
                discounts: json.data,
            });
        } catch (e) {
            alert(e);
        }
    }
    //行数据“渲染”
    renderCell = (info: Object) => {
        return (
            <GroupPurchaseCell
                info={info.item}
                onPress={this.onCellSelected}
            />
        )
    }
    //行数据“点击”事件
    onCellSelected = (info: Object) => {
        StatusBar.setBarStyle('default', false);
        this.props.navigation.navigate('GroupPurchase', {info: info});
    }

    keyExtractor = (item: Object, index: number) => {
        return index.toString();
    }

    renderHeader = ()=>{
        return (
            <View>
                <HomeMenuView menuInfos={api.menuInfo} onMenuSelected={this.onMenuSelected} />
                <SpacingView />
                <HomeGridView infos={this.state.discounts} onGridSelected={(this.onGridSelected)} />
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        );
    }

    onMenuSelected = (index: number)=>{
        alert(index);
    }

    onGridSelected = ()=>{
        let discount = this.state.discounts[index];

        if (discount.type == 1){
            StatusBar.setBarStyle('default', false);

            let location = discount.tplurl.indexOf('http');
            let url = discount.tplurl.slice(location);
            this.props.navigation.navigate('Web', {url: url});
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    //指定一开始渲染的元素数量，最好刚刚够填满一个屏幕
                    initialNumToRender = {5}
                    //数据源
                    data={this.state.dataList}
                    //根据行数据data，渲染每一行的组件
                    renderItem={this.renderCell}

                    keyExtractor={this.keyExtractor}
                    /*如果设置了此选项，则会在列表头部添加一个标准的RefreshControl
                    控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing
                    属性。*/
                    onRefresh={this.requestData}
                    //在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号
                    refreshing={this.state.refreshing}
                    //头部组件
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.paper,
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: Util.windowSize.onePixel,
        borderColor: Colors.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: Util.windowSize.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
});
export default HomeScene;