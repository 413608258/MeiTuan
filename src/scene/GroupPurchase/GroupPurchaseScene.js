import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    InteractionManager,
    TouchableOpacity,
    StatusBar,
    FlatList
} from 'react-native';
import RefreshListView, {RefreshState} from "react-native-refresh-list-view";
import {recommendUrlWithId, groupPurchaseDetailWithId} from "../../api";
import {screen} from "../../common";
import Colors from "../../common/Colors";
import {Heading1, Heading2, Heading3, Paragraph, Tip} from "../../widget/Text";
import GroupPurchaseCell from "./GroupPurchaseCell";
//import NavigationItem from "../../widget/NavigationItem";
//import Button from "../../widget/Button";
//import Separator from "../../widget/Separator";
import {NavigationItem, Button, Separator} from "../../widget";
import Entypo from "react-native-vector-icons/AntDesign";

/**
 * @ClassName : GroupPurchaseScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-18
 **/

class GroupPurchaseScene extends Component {

    static navigationOptions = ({navigation}: any)=>({
        //headerTilte: '团购详情',
        headerTitle: (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Tip style={{fontSize: 18}}>团购详情</Tip>
            </View>
        ),
        headerStyle: {backgroundColor: 'white'},
        headerLeft: (
            <TouchableOpacity
                onPress={()=>{
                    //navigation.navigate('Home');
                    navigation.goBack();
                }}
                >
                <Entypo
                    //name={'chevron-thin-left'}
                    name={'left'}
                    size={27}
                    color={Colors.primary}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon = {require('../../img/public/icon_navigation_item_share.png')}
                onPress = {()=>{
                }}
            />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            title: 'GroupPurchaseScene',
            //id: null,
            dataList: [],
            //refreshState: RefreshState.Idle,
            refreshing: false,
        };
    }

    componentDidMount() {
        //TODO: InteractionManager方法 有待研究
        InteractionManager.runAfterInteractions(()=>{
            this.requestData();
        });
    }

    requestData = ()=>{
        this.requestRecommend();
    }
    //Home(团购)页面"行点击"跳转过来执行的方法
    requestRecommend = async ()=>{
        try {
            this.setState({
                //TODO: RefreshState 有待研究
                //refreshState: RefreshState.HeaderRefreshing,
                refreshing: true,
            });

            let info = this.props.navigation.state.params.info;
            var id = this.state.id ? this.state.id: info.id;
            let response = await fetch(recommendUrlWithId(id));
            //let response = await fetch('http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=31995082&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7');
            let json = await response.json();
            console.log("id: " + id);
            console.log(JSON.stringify(json));

            let dataList = json.data.deals.map((info)=>{
                return {
                    id: info.id,
                    imageUrl: info.imgurl,
                    title: info.brandname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price,
                };
            });

            this.setState({
                dataList: dataList,
                //refreshState: RefreshState.NoMoreData,
                refreshing: false,
            });
        }catch (e) {
            this.setState({
                //refreshState: RefreshState.Failure,
                refreshing: false,
            });
        }
    }
    //本页面"行点击"事件 执行的方法
    requestRecommend2 = async (info)=>{
        try {
            //this.refs._flatList.scrollTo({x:0, y:0, animated: false});
            //this.refs._flatList.scrollToEnd

            this.setState({
                //TODO: RefreshState 有待研究
                //refreshState: RefreshState.HeaderRefreshing,
                refreshing: true,
            });

            //let info = this.props.navigation.state.params.info;
            var id = info.id;
            let response = await fetch(recommendUrlWithId(id));
            //let response = await fetch('http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=31995082&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7');
            let json = await response.json();
            console.log("id: " + id);
            //console.log(JSON.stringify(json));

            let dataList = json.data.deals.map((info)=>{
                return {
                    id: info.id,
                    imageUrl: info.imgurl,
                    title: info.brandname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price,
                };
            });

            console.log("Lous: " + JSON.stringify(dataList));

            this.setState({
                dataList: dataList,
                //refreshState: RefreshState.NoMoreData,
                refreshing: false,
            });
        }catch (e) {
            this.setState({
                //refreshState: RefreshState.Failure,
                refreshing: false,
            });
        }
    }

    keyExtractor = (item: Object, index)=>{
        return index.toString();
    }

    renderHeader = ()=>{
        let info = this.state.info ? this.state.info : this.props.navigation.state.params.info;

        return (
            <View>
                <View>
                    <Image style={styles.banner} source={{uri: info.imageUrl.replace('w.h', '480.0')}}/>

                    <View style={styles.topContainer}>
                        <Heading2 style={{color: Colors.primary}}>￥</Heading2>
                        <Heading1 style={{marginBottom: -8}}>{info.price}</Heading1>
                        <Paragraph style={{marginLeft: 10}}>门市价：￥{(info.price * 1.1).toFixed(0)}</Paragraph>
                        <View style={{flex: 1}}></View>
                        <Button
                            title='立即抢购'
                            titleStyle={{color: 'white', fontSize: 18}}
                            style={styles.buyButton}
                        />
                    </View>
                </View>

                <Separator/>

                <View>
                    <View style={styles.tagContainer}>
                        <Image style={{width: 20, height: 20}} source={require('../../img/home/icon_deal_anytime_refund.png')}/>
                        <Paragraph style={{color: '#89B24F'}}>随时退</Paragraph>
                        <View style={{flex: 1}}/>
                        <Paragraph>已售{1234}</Paragraph>
                    </View>
                </View>

                <Separator/>

                <View style={styles.tipHeader}>
                    <Heading3>看了本团购的用户还看了</Heading3>
                </View>

            </View>
        );
    }

    /*renderCell = (rowData: any)=>{
        return (
            <GroupPurchaseCell
                info={rowData.item}
                onPress={()=> this.props.navigation.navigate('GroupPurchase', {info: rowData.item})}
                //onPress={()=> this.props.navigation.navigate('Home')}
            />
        );
    }*/
    renderCell = (info: any) => {
        return (
            <GroupPurchaseCell
                info={info.item}
                onPress={this.onCellSelected}
            />
        )
    }
    //行数据“点击”事件
    onCellSelected = (info: Object) => {
        /*StatusBar.setBarStyle('default', false)
        this.props.navigation.navigate('Home', {info: info})*/
        //this.refs._flatList.scrollTo({x:0, y:0, animated: false});
        this.refs._scrollView.scrollTo({x:0, y:0, animated: false});
        this.setState({
            info: info,
            //id: info.id,
        });
        this.requestRecommend2(info);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<RefreshListView
                    data={this.state.dataList}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderCell}
                    keyExtractor={this.keyExtractor}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.requestData}
                />*/}
                <ScrollView ref="_scrollView">
                    <FlatList ref='_flatList'
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
                              refreshing={false}
                        //头部组件
                              ListHeaderComponent={this.renderHeader}
                    />
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    banner: {
        //width: Util.windowSize.width,
        width: screen.width,
        height: screen.width * 0.5
    },
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buyButton: {
        backgroundColor: '#fc9e28',
        width: 94,
        height: 36,
        borderRadius: 7,
    },
    tagContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    tipHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: Colors.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
})

export default GroupPurchaseScene;
